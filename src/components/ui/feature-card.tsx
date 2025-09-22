import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  buttonText: string;
  onAction: () => void;
  className?: string;
}

export const FeatureCard = ({
  title,
  description,
  icon: Icon,
  features,
  buttonText,
  onAction,
  className = ""
}: FeatureCardProps) => {
  return (
    <Card className={`group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 ${className}`}>
      <CardHeader className="text-center pb-4">
        <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
          <Icon className="h-8 w-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {features.map((feature, index) => (
            <Badge key={index} variant="secondary" className="mr-2 mb-2">
              {feature}
            </Badge>
          ))}
        </div>
        <Button 
          onClick={onAction}
          className="w-full bg-gradient-primary shadow-glow hover:shadow-elegant transition-all duration-300"
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};