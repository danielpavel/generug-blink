import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileTextIcon } from "lucide-react";
import Link from "next/link";

const actionCards: Array<{
  title: string;
  href: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}> = [
  {
    title: "GeneRUG Mint",
    href: "/memo",
    description: "Send a simple message on-chain using an SPL Memo.",
    icon: <FileTextIcon className="size-12" />,
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 text-center">
      <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
        GeneRUG Blinks App
      </h2>
      <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        This project lets you mint your GeneRUG via a Solana Blink.
      </p>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {actionCards.map((item, key) => (
          <Link key={key} href={item.href} className="group">
            <Card className="group-hover:border-primary">
              <CardHeader>
                <CardTitle className="space-y-3">
                  <span className="block font-bold group-hover:text-pretty">
                    {item.title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
