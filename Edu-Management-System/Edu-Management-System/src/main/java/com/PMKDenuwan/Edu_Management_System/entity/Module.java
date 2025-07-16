package com.PMKDenuwan.Edu_Management_System.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Table(name = "Module")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Module {
    @Id
    @Column(name = "Module_Id", nullable = false, unique = true, length = 10)
    private String mID;

    @Column(name = "Module_Name", length = 100)
    private String mName;

    @Column(name = "Module_Duration", nullable = false)
    private String mDuration;

    @ManyToMany(mappedBy = "modules")
    private Set<Course> courses;

    @ManyToOne
    @JoinColumn(name = "Lecturer_Id", nullable = false)
    private Lecturer lecturer;
}
