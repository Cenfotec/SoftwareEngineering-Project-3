package io.pablobonilla.bisoft22laboratorio2.controller;

import io.pablobonilla.bisoft22laboratorio2.entity.Producto;
import io.pablobonilla.bisoft22laboratorio2.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ProductoController {

    @Autowired
    ProductoRepository productoRepository;

    @PostMapping("producto")
    public ResponseEntity<Producto> addProducto(@RequestBody Producto producto) {
        productoRepository.save(producto);
        return ResponseEntity.status(HttpStatus.CREATED).body(producto);
    }

    @GetMapping("producto/{id}")
    public Optional<Producto> getProducto(@PathVariable(value = "id") Integer id) {
        return productoRepository.findById(id);
    }

    @PutMapping("producto/{id}")
    public ResponseEntity<Producto> updateProducto(@PathVariable(value = "id") Integer id,
                                                   @RequestBody Producto productoUpdate) {
        Optional<Producto> producto = productoRepository.findById(id);
        producto.get().setNombre(productoUpdate.getNombre());
        producto.get().setDescripcion(productoUpdate.getDescripcion());
        producto.get().setCantidad(productoUpdate.getCantidad());
        producto.get().setPrecio(productoUpdate.getPrecio());
        Producto updatedProducto = productoRepository.save(producto.get());
        return ResponseEntity.status(HttpStatus.OK).body(updatedProducto);
    }

    @DeleteMapping("producto/{id}")
    public ResponseEntity<Producto> deleteProducto(@PathVariable(value = "id") Integer id) {
        productoRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
