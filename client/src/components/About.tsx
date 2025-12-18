import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Atom, GraduationCap, Users, Globe } from "lucide-react";

const features = [
  {
    icon: Atom,
    title: "Fusion Research",
    description: "Advancing fundamental plasma physics and fusion energy research in Nigeria through cutting-edge experiments and theoretical studies."
  },
  {
    icon: GraduationCap,
    title: "Capacity Building",
    description: "Training the next generation of Nigerian physicits and engineers in plasma physics and fusion technology through intensive programs."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building partnerships with international fusion research institutions including ITER, IAEA, and leading universities worldwide."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Contributing to the global effort for clean, sustainable fusion energy while developing Africa's scientific capabilities."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About NSPPFE
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The Nigerian School on Plasma Physics and Fusion Energy is dedicated to advancing 
            fusion science research and building scientific capacity across Africa through 
            education, research, and international collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-md bg-accent flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="inline-block p-8 max-w-2xl">
            <blockquote className="text-lg italic text-muted-foreground mb-4">
              "Our mission is to position Africa at the forefront of fusion energy research 
              by nurturing scientific talent and fostering international partnerships that 
              will shape the future of clean energy."
            </blockquote>
            <p className="text-sm font-medium text-foreground">NSPPFE Mission Statement</p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
