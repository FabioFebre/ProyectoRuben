import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface ContactoProps {
  selectedService: string;
}

const Contacto: React.FC<ContactoProps> = ({ selectedService }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.from("contactosruben").insert([
      {
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        empresa: formData.empresa,
        mensaje: formData.mensaje,
        servicio: selectedService,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(" Error al enviar:", error);
      alert("Ocurrió un error al enviar el mensaje");
    } else {
      console.log("Datos guardados:", data);
      alert("Datos enviados correctamente. ");
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
        mensaje: "",
      });
    }
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-dark relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Contáctanos
          </h2>
          <p className="text-gray-300 text-lg">
            Completa el formulario y te contactaremos pronto.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-10 bg-[#002B36]/80 backdrop-blur-sm border border-primary/40 shadow-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-1">Servicio</label>
                <input
                  type="text"
                  name="servicio"
                  value={selectedService}
                  readOnly
                  className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Empresa (opcional)</label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Mensaje</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600"
                  placeholder="Escribe tu mensaje..."
                />
              </div>

              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
