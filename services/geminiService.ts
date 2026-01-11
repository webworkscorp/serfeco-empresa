
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getProjectAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `
          Eres un asesor técnico experto de MaderasMyR, Costa Rica.
          Perfil: 16 años de experiencia en construcción y venta de madera seleccionada.
          Enfoque: Práctico, honesto, directo y puntual.
          Servicios: Venta de madera para estructuras, construcción de obra nueva, remodelaciones e instalación de puertas (residenciales, estacionamientos, almacenes).
          Valores: Sostenibilidad, calidad de materiales y cumplimiento de plazos.
          Tono: Profesional pero cercano.
          Restricción: No dar precios exactos por metro o unidad, sugerir una cotización formal.
          Cierre: Invitar a escribir al WhatsApp +506 6011 5347 para una asesoría personalizada.
          Idioma: Español de Costa Rica.
        `,
        temperature: 0.5,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "En este momento no puedo procesar la solicitud. Por favor contacte directamente al +506 6011 5347.";
  }
};

export const getSmartEstimate = async (projectDescription: string) => {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Analiza este requerimiento de construcción/madera: "${projectDescription}"`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              complexity: { type: Type.STRING },
              durationEstimate: { type: Type.STRING },
              keyConsiderations: { type: Type.ARRAY, items: { type: Type.STRING } },
              recommendedMaterials: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["complexity", "durationEstimate", "keyConsiderations", "recommendedMaterials"]
          }
        }
      });
      return JSON.parse(response.text);
    } catch (error) {
      return null;
    }
}
