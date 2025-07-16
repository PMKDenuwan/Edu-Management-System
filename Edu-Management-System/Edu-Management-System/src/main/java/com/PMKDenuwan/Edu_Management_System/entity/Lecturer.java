package com.PMKDenuwan.Edu_Management_System.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Table(name = "Lecturer")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Lecturer {
    @Id
    @Column(name = "Lecturer_Id", nullable = false, unique = true, length = 10)
    private String lID;

    @Column(name = "NIC", nullable = false, length = 20)
    private String nic;

    @Column(name = "Lecturer_Name", nullable = false, length = 80)
    private String lName;

    @Column(name = "Lecturer_Address", nullable = false, length = 80)
    private String lAddress;

    @Column(name = "Lecturer_ContactNo", nullable = false, length = 10)
    private String lContactNo;

    @Column(name = "Salary", nullable = false)
    private double salary;

    @OneToMany(mappedBy = "lecturer")
    private Set<Module> modules;
}
