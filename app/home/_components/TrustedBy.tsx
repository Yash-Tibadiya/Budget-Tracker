import Image from "next/image";
import { trustedCompanies } from "../data/trusted-companies";

const TrustedBy = () => {
  return (
    <section className="w-full py-12 border-y bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-2xl font-medium text-white mb-12">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 px-20">
            {trustedCompanies.map((company, i) => (
              <Image
                key={i}
                className="h-8 w-auto dark:invert opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                src={company.src}
                alt={company.alt}
                height={company.height}
                width={company.width}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
