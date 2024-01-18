package com.kiskac.portfolio;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class ContactController {

    private final EmailService emailService;

     @PostMapping("/contact")
    public ResponseEntity<?> contactEmail(@RequestBody EmailDTO emailDTO){
        try {
            return ResponseEntity.ok().body(emailService.mimeMessageSender(emailDTO.email, emailDTO.subject, emailDTO.message, emailDTO.mobileNum, emailDTO.fullName)); 
        } catch (MessagingException e) {
          return ResponseEntity.status(503).body(e.getMessage());
        }
    } 
}