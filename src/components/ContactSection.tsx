import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-secondary/30 py-24 px-4 relative text-foreground"
    >
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">
          Let's <span className="text-primary">Connect</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Whether you have an idea, a project, or just want to say hi—I'd love
          to hear from you!
        </p>

        <div className="bg-background rounded-2xl shadow-xl p-8 space-y-10">
          {/* Información de contacto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-6 h-6 text-primary" />
              <span className="font-semibold">Email</span>
              <a
                href="mailto:saularroyo1310@gmail.com"
                className="text-muted-foreground hover:text-primary transition"
              >
                saularroyo1310@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-6 h-6 text-primary" />
              <span className="font-semibold">Phone</span>
              <a
                href="tel:+81070"
                className="text-muted-foreground hover:text-primary transition"
              >
                +81 070 8413 6769
              </a>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="font-semibold">Location</span>
              <p className="text-muted-foreground">Yokohama, Japan</p>
            </div>
          </div>

          {/* Formulario funcional */}
          <form
            action="https://formsubmit.co/saularroyo1310@gmail.com"
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Contact Message!" />
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="col-span-1 md:col-span-2 px-4 py-3 rounded-xl border border-border bg-transparent focus:ring-2 focus:ring-primary outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="col-span-1 md:col-span-2 px-4 py-3 rounded-xl border border-border bg-transparent focus:ring-2 focus:ring-primary outline-none"
            />
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Your Message"
              className="col-span-1 md:col-span-2 px-4 py-3 rounded-xl border border-border bg-transparent focus:ring-2 focus:ring-primary outline-none resize-none"
            />
            <button
              type="submit"
              className="col-span-1 md:col-span-2 bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl transition"
            >
              Send Message
            </button>
          </form>

          {/* Redes sociales */}
          <div className="flex justify-center space-x-4 pt-6">
            <a href="https://www.linkedin.com/in/saul-rangel-arroyo-a358b7215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                <Linkedin />
            </a>
            <a href="https://www.instagram.com/saul.hik?igsh=cWozc3ozb3lpZjRp" target="_blank">
                <Instagram />
            </a>
            <a href="https://www.facebook.com/share/1JGxsixqTQ/" target="_blank">
                <Facebook />
            </a>
            <a href="https://github.com/SaulRA13" target="_blank">
                <Github />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
