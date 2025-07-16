package com.PMKDenuwan.Edu_Management_System.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Table(name = "Student")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Student {
    @Id
    @Column(name = "Student_Id", nullable = false, unique = true, length = 10)
    private String sID;

    @Column(name = "Student_Name", nullable = false, length = 100)
    private String sName;

    @Column(name = "Student_Address", nullable = false, length = 200)
    private String sAddress;

    @Column(name = "Student_ContactNo", nullable = false, length = 15)
    private String sContactNo;

    @Column(name = "Student_Email", nullable = false, length = 100)
    private String sEmail;

    @ManyToMany
    @JoinTable(
            name = "student_course",
            joinColumns = @JoinColumn(name = "student_id"),
            inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private Set<Course> courses;
}
