Feature: Selección de mascota para compra en PetStore

    Scenario: Un cliente agrega una mascota a su pedido
        Given el cliente ingresa a la tienda virtual de PetStore
        When se identifica como "jose.moyano" con la contraseña "Prueba1"
        And explora la sección de mascotas en adopción
        And elige la mascota "Chihuahua"
        And la incluye en su pedido
        Then debería ver "Chihuahua" en el resumen de su compra.