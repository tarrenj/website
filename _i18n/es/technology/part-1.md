### Privada
{: .subsection-title}
## Zen es una plataforma construida sobre la tecnología, zero-knowlegde Succint Non-interactive ARguments of Knowledge o por sus siglas en inglés (zk-SNARKS), con una arquitectura de nodo seguro descentralizado.

### Seguro
{: .subsection-title}
## ZenCash es la primer criptomoneda con encriptación completa punta a punta a nivel nodo e internodo.
En adición a zk-SNARKS, la arquitectura Zen incluye encriptación a nivel nodo. Las criptomonedas dependen de los nodos para operar, nosotros requerimos que los operadores de nodos seguros tengan la información más actualizada y seguridad de red para poder calificar a la compensación.

### No rastreable
{: .subsection-title}
## Las transacciones privadas son completamente encriptadas, sin embargo pueden ser verificadas en el consenso de la red. El remitente, recipiente y la cantidad son ocultas en la blockchain, haciendo a Zen imposible de rastrear.

{:text-center: .text-center .mb-5}
[{% translate homepage.whitepaper.button %}]({{site.baseurl_root}}{{site.data.whitepapers[site.lang]}}){: .btn .btn-lg .btn-primary}
{:text-center}

Domain fronting es una técnica de evasión de censura que esconde el punto final de conexión de una comunicación. Trabaja a nivel aplicación, usando HTTPS, para comunicarse a sitios prohibidos aparentando que la comunicación es con otro sitio, permitido por el censor.

La idea principal es el uso de diferentes nombres de dominio en diferentes capas de comunicación. Un dominio aparece por la parte de “afuera” de una solicitud de un HTTPS- en la solicitud de 9 DNS y el Indicador de Nombre de Servidor TLS, mientras otro dominio aparece por la parte de “adentro”- en el encabezado HTTP del anfitrión,invisible para el censor sobre encriptación HTTPS. El censor, incapaz de distinguir entre tráfico fronted y non-fronted a un dominio, debe escoger entre permitir la elusión de tráfico y bloquear el dominio completamente, lo cual resulta en un daño colateral costoso.

Domain fronting no requiere cooperación especial por intermediarios de la red. Nosotros identificamos un número de servicios web difíciles de bloquear tales como redes de entrega de contenido, que soportan conexiones de domain fronting y que son útiles para la evasión de la censura.

### Resiliente
{: .subsection-title}
## Zen tiene uno de los sistemas de nodos más distribuidos. ¡Aprende más sobre Nodos Seguros!
**[Revisa nuestra red de Nodos Seguros](https://securenodes.na.zensystem.io/)**

Los Nodos Seguros de Zen permiten un sistema de criptomoneda distribuida y confiable que encripta la comunicación entre nodos. La comunicación de nodo Zen, es como cualquier otra red de tráfico encriptada, en lugar del tráfico de Bitcoin. Esto hace que efectivamente se esconda el tipo de actividad que se toma a cabo, haciendo menos probable que los usuarios Zen y los nodos sean bloqueados.

Los requerimientos básicos de un Nodo Seguro son:
* Mantener un mínimo de 42 Zen en una dirección transparente por nodo. Esto es suficiente para demostrar que el operador le importa suficiente ZenCash y esto desalienta a los usuarios con intenciones maliciosas de operar un Nodo Seguro.
* Crear y mantener un certificado TLs valido de una Autoridad de Certificados reconocida. Esto permitirá un transporte de datos encriptados.
* Correr el nodo en un servidor con suficiente poder de procesamiento y memoria para que pueda cumplir los retos computacionales. Esto nos protege de ataques DDoS.
* Mantener una copia completa del blockchain de ZEN. Esto nos asegura que ni un UTXO’s o notas de compromiso se pierdan.
* Mantener el nodo en línea como mínimo el 92% del tiempo.
