export default function Home() {
  return (
    <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 text-center">
      <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
        GeneRUG Blinks App
      </h2>
      <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        This project lets you mint your GeneRUG via a Solana Blink.
      </p>
    </div>
  );
}
