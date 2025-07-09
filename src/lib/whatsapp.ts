const WHATSAPP_NUMBER = "5522998527632";

export const createWhatsAppLink = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const whatsAppMessages = {
  hero: "Oi! Vim pelo seu site e gostaria de agendar uma consulta de podologia.",
  cta: "Oi! Vim pelo seu site e preciso de um atendimento. Gostaria de agendar uma consulta com urgência.",
  footer: "Oi! Vim pelo seu site e gostaria de agendar um atendimento. Quando você tem disponibilidade?",
  services: "Oi! Vim pelo seu site e gostaria de uma consulta especializada. Preciso saber qual tratamento é ideal para mim."
};