import { motion } from "framer-motion";
import { Mail, MapPin, Globe } from "lucide-react";
import { SiX, SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">N</span>
                </div>
                <span className="font-semibold text-lg text-foreground">NSFEPP</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                Nigerian School on Fusion Energy and Plasma Physics. Advancing fusion 
                science and building scientific capacity across Africa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-semibold text-foreground mb-4">Contact Information</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>contact@nsfepp.org</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Lagos, Nigeria</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>www.nsfepp.org</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-semibold text-foreground mb-4">Connect With Us</h4>
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => console.log("X/Twitter clicked")}
                  data-testid="button-twitter"
                >
                  <SiX className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => console.log("LinkedIn clicked")}
                  data-testid="button-linkedin"
                >
                  <SiLinkedin className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground"
        >
          <p>&copy; {currentYear} Nigerian School on Fusion Energy & Plasma Physics. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
