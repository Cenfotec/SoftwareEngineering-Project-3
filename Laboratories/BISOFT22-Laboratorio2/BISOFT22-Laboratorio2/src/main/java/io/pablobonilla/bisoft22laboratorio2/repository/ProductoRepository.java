package io.pablobonilla.bisoft22laboratorio2.repository;

import io.pablobonilla.bisoft22laboratorio2.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer> {
}
