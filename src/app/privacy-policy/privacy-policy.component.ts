import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent {
  selectedLanguage = 'es';
  content: any = {};

  ngOnInit() {
    this.setContent(this.selectedLanguage);
  }

  onLanguageChange(event: any) {
    this.selectedLanguage = event.target.value;
    this.setContent(this.selectedLanguage);
  }

  setContent(language: string) {
    if (language === 'es') {
      this.content = {
        title: 'Políticas de Privacidad',
        lastUpdate: 'Última actualización: 22/06/2024',
        introduction: '1. Introducción',
        introductionText:
          'En Facil Pos, respetamos su privacidad y nos comprometemos a proteger su información personal. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos la información relacionada con el uso de nuestra aplicación de soporte técnico, Chat Soporte Facil Pos.',
        information: '2. Información que Recopilamos',
        oauth: 'OAuth para Dialogflow:',
        oauthText:
          'Utilizamos OAuth para permitir que los usuarios accedan a nuestra aplicación a través de Dialogflow. No recopilamos información personal más allá de lo necesario para realizar la autenticación OAuth.',
        chatHistory: 'Historial de Chats:',
        chatHistoryText:
          'Al usar nuestra aplicación, se almacena el historial de chats. Esta información no está asociada a ningún usuario individual y se utiliza únicamente para mejorar el servicio de soporte técnico.',
        googleDrive: 'Acceso a Google Drive:',
        googleDriveText:
          'Utilizamos permisos de Google Drive para leer archivos públicos compartidos por los usuarios mediante un enlace. Esta información se utiliza únicamente para proporcionar asistencia técnica y mejorar la calidad del servicio.',
        useOfInfo: '3. Uso de la Información',
        useOfInfoText:
          'La información recopilada a través del historial de chats y los archivos de Google Drive se utiliza para:',
        improveServices:
          'Proporcionar y mejorar nuestros servicios de soporte técnico.',
        analyzeQueries:
          'Analizar las consultas comunes y mejorar las respuestas del chatbot.',
        readDriveFiles:
          'Leer archivos compartidos por los usuarios para proporcionar asistencia técnica.',
        storage: '4. Almacenamiento y Seguridad de la Información',
        storageText: 'Almacenamiento:',
        storageDetail:
          'El historial de chats se almacena en Google Dialogflow CX y los archivos de Google Drive se leen directamente desde Google Drive.',
        security: 'Seguridad:',
        securityText:
          'Implementamos medidas de seguridad adecuadas para proteger el historial de chats y los archivos de Google Drive. Dado que la información no está asociada a usuarios individuales, minimizamos los riesgos relacionados con la privacidad.',
        userRights: '5. Derechos de los Usuarios',
        userRightsText:
          'Si desea acceder, actualizar o eliminar su información, o si tiene alguna pregunta sobre nuestra política de privacidad, puede comunicarse con nosotros en:',
        email: 'Correo electrónico:',
        changes: '6. Cambios en la Política de Privacidad',
        changesText:
          'Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Notificaremos a los usuarios sobre cualquier cambio publicando la nueva política en esta página. Le recomendamos que revise periódicamente esta Política de Privacidad para estar informado sobre cómo protegemos su información.',
        contact: '7. Contacto',
        contactText:
          'Si tiene alguna pregunta o inquietud sobre nuestra Política de Privacidad, no dude en contactarnos en:',
      };
    } else {
      this.content = {
        title: 'Privacy Policy',
        lastUpdate: 'Last updated: 22/06/2024',
        introduction: '1. Introduction',
        introductionText:
          'At Facil Pos, we respect your privacy and are committed to protecting your personal information. This Privacy Policy describes how we collect, use, and protect information related to the use of our support application, Chat Support Facil Pos.',
        information: '2. Information We Collect',
        oauth: 'OAuth for Dialogflow:',
        oauthText:
          'We use OAuth to allow users to access our application through Dialogflow. We do not collect personal information beyond what is necessary for OAuth authentication.',
        chatHistory: 'Chat History:',
        chatHistoryText:
          'When using our application, chat history is stored. This information is not associated with any individual user and is used solely to improve the technical support service.',
        googleDrive: 'Google Drive Access:',
        googleDriveText:
          'We use Google Drive permissions to read public files shared by users via a shareable link. This information is used solely to provide technical support and improve service quality.',
        useOfInfo: '3. Use of Information',
        useOfInfoText:
          'The information collected through chat history and Google Drive files is used to:',
        improveServices: 'Provide and improve our technical support services.',
        analyzeQueries: 'Analyze common queries and improve chatbot responses.',
        readDriveFiles:
          'Read files shared by users to provide technical support.',
        storage: '4. Information Storage and Security',
        storageText: 'Storage:',
        storageDetail:
          'Chat history is stored in Google Dialogflow CX and Google Drive files are read directly from Google Drive.',
        security: 'Security:',
        securityText:
          'We implement appropriate security measures to protect stored chat history and Google Drive files. Since the information is not associated with individual users, we minimize privacy-related risks.',
        userRights: '5. User Rights',
        userRightsText:
          'If you wish to access, update, or delete your information, or if you have any questions about our privacy policy, you can contact us at:',
        email: 'Email:',
        changes: '6. Changes to the Privacy Policy',
        changesText:
          'We reserve the right to update this Privacy Policy at any time. We will notify users of any changes by posting the new policy on this page. We recommend that you review this Privacy Policy periodically to stay informed about how we protect your information.',
        contact: '7. Contact',
        contactText:
          'If you have any questions or concerns about our Privacy Policy, please contact us at:',
      };
    }
  }
}
