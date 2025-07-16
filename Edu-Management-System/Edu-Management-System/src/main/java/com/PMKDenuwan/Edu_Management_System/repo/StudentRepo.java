package com.PMKDenuwan.Edu_Management_System.repo;

import com.PMKDenuwan.Edu_Management_System.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student,String> {
}
