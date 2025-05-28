Feature: Acceso al sistema mediante login

    Scenario: Usuario válido inicia sesión
        Given el usuario está en la página de login
        When se identifica con credenciales válidas
        Then debería ver su panel de usuario

    Scenario: Usuario inválido intenta iniciar sesión
        Given el usuario está en la página de login
        When se identifica con credenciales inválidas
        Then debería ser informado que sus credenciales son incorrectas