package com.yourpackage.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CalculatorController {

    @PostMapping("/add")
    public ResponseEntity<Integer> addNumbers(@RequestBody NumbersDto numbers) {
        int result = numbers.getNumber1() + numbers.getNumber2();
        return ResponseEntity.ok(result);
    }
}
