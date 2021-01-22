package com.axe1.demo.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.FORBIDDEN, reason = "Votre Compte est bloqué veuillez contacter l'admin")
public class BlockedUserException extends Exception {
}
