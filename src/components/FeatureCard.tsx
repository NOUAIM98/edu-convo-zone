import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

const FeatureCard = ({ icon: Icon, title, description, color = "trust" }: FeatureCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-muted/30">
      <CardHeader>
        <div className={`w-12 h-12 rounded-lg bg-${color}-light flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-6 h-6 text-${color}`} />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;