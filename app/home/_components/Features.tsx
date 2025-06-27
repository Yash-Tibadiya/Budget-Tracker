import { motion } from "framer-motion";
import { Star, Zap, Shield, BarChart, Layers, AudioWaveform } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "../data/features";

const Features = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            All You Need to Manage Your Budget
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Our powerful platform provides all the tools you need to take
            control of your finances, track your spending, and make informed
            decisions to achieve your financial goals.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, i) => {
            const IconComponent =
              {
                Zap: Zap,
                BarChart: BarChart,
                AudioWaveform: AudioWaveform,
                Shield: Shield,
                Layers: Layers,
                Star: Star,
              }[feature.icon] || Zap;

            return (
              <motion.div key={i} variants={item}>
                <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                      <IconComponent className="size-5" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
