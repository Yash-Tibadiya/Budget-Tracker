export type PricingPlanType = {
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

export const pricingPlans: PricingPlanType[] = [
  {
    name: "Starter",
    price: 0,
    description: "Perfect for small teams and startups.",
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "5GB storage",
      "Email support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    price: 0.1,
    description: "Ideal for growing businesses.",
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "25GB storage",
      "Priority email support",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 0.5,
    description: "For large organizations with complex needs.",
    features: [
      "Unlimited team members",
      "Custom analytics",
      "Unlimited storage",
      "24/7 phone & email support",
      "Advanced API access",
      "Custom integrations",
    ],
    cta: "Contact Sales",
  },
];
