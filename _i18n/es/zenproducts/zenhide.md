## Domain Fronting es una técnica versátil de elusión de la censura que oculta el punto final remoto de una comunicación.
Trabaja a nivel aplicación, usando HTTPS, para comunicarse a sitios prohibidos aparentando que la comunicación es con otro sitio, permitido por el censor.

La idea principal es el uso de diferentes nombres de dominio en diferentes capas de comunicación. Un dominio aparece por la parte de "afuera" de una solicitud de un HTTPS- en la solicitud de 9 DNS y el Indicador de Nombre de Servidor TLS, mientras otro dominio aparece por la parte de "adentro"- en el encabezado HTTP del anfitrión,invisible para el censor sobre encriptación HTTPS. El censor, incapaz de distinguir entre tráfico fronted y non-fronted a un dominio, debe escoger entre permitir la elusión de tráfico y bloquear el dominio completamente, lo cual resulta en un daño colateral costoso.

Domain fronting no requiere cooperación especial por intermediarios de la red. Nosotros identificamos un número de servicios web difíciles de bloquear tales como redes de entrega de contenido, que soportan conexiones de fronteo de dominio y que son útiles para la evasión de la censura.
