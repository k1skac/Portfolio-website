package com.kiskac.portfolio;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmailService {
    
    private final JavaMailSender javaMailSender;
    private  final String TO = "kiskac@gmail.com";
    
    public String mimeMessageSender(String from, String subject, String message, String mobileNumber, String fullName) throws MessagingException{
        MimeMessage contactMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(contactMessage, true );
        helper.setTo(TO);
        String text = "<h2>Dear Balázs, </h2><br>" + "<p>This email was sent by <b>" + fullName + " </b>from the following email address: <b>" + from  + "</b><br>and with the phone number: <b>" +
         mobileNumber + "</b>.<br>The subject: <b> " + subject + "</b>.<br><hr>This is the message: <br><i>" + message + "</i><hr></p>";
        contactMessage.setText(text, "UTF-8", "html");
        helper.setFrom(from);
        helper.setSubject(subject);
        javaMailSender.send(contactMessage);
        return "This MiMEmessage was sent to the King!";
    }
}