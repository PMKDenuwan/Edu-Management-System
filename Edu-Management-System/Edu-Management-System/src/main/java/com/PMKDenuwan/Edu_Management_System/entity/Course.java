package com.PMKDenuwan.Edu_Management_System.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Table(name = "Course")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Course {
    @Id
    @Column(name = "Course_Id", nullable = false, unique = true, length = 10)
    private String cID;

    @Column(name = "Course_Name", length = 100)
    private String cName;

    @Column(name = "Course_Fee", nullable = false)
    private double cFee;

    @Column(name = "Duration", nullable = false)
    private String cDuration;

    @ManyToMany(mappedBy = "courses")
    private Set<Student> students;

    @ManyToMany
    @JoinTable(
            name = "course_module",
            joinColumns = @JoinColumn(name = "course_id"),
            inverseJoinColumns = @JoinColumn(name = "module_id")
    )
    private Set<Module> modules;
}
