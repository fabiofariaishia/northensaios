import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from './constants'

/**
 * Envia email através do EmailJS
 *
 * IMPORTANTE: Antes de usar em produção:
 * 1. Criar conta em https://www.emailjs.com
 * 2. Configurar serviço de email (Gmail, Outlook, etc)
 * 3. Criar template com as variáveis:
 *    - {{from_name}} - Nome do remetente
 *    - {{from_email}} - Email do remetente
 *    - {{phone}} - Telefone
 *    - {{company}} - Empresa
 *    - {{service}} - Serviço de interesse
 *    - {{message}} - Mensagem
 * 4. Atualizar EMAILJS_CONFIG em src/utils/constants.js com:
 *    - serviceId
 *    - templateId
 *    - publicKey
 */

export const sendEmail = async (formData) => {
  try {
    // Validar se as configurações foram atualizadas
    if (
      EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID' ||
      EMAILJS_CONFIG.templateId === 'YOUR_TEMPLATE_ID' ||
      EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY'
    ) {
      console.warn('EmailJS não configurado. Verifique src/utils/constants.js')
      // Em desenvolvimento, simular sucesso
      return {
        success: true,
        message: 'Mensagem enviada com sucesso! (Simulado em desenvolvimento)'
      }
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      formData,
      EMAILJS_CONFIG.publicKey
    )

    return {
      success: true,
      response,
      message: 'Email enviado com sucesso!'
    }
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return {
      success: false,
      error,
      message: 'Erro ao enviar email. Por favor, tente novamente.'
    }
  }
}
