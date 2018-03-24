## Domain Fronting ist eine vielseitige Technik zur Umgehung der Zensur, die den entfernten Endpunkt einer Kommunikation verbirgt.
Es funktioniert auf der Anwendungsschicht, indem es HTTPS verwendet, um mit einem verbotenen Host zu kommunizieren, während es so aussieht, als ob es mit einem anderen Host kommuniziert.

Die Grundidee ist die Verwendung verschiedener Domainnamen auf verschiedenen Kommunikationsebenen. Eine Domain erscheint auf der "Außenseite" eines HTTPS-Requests - in der 9 DNS-Anfrage und der TLS-Server-Namens-Indikation, während eine andere Domain auf der "Innenseite" im HTTP-Host-Header erscheint, unsichtbar für den Zensor unter HTTPS-Verschlüsselung. Ein Zensor, der nicht in der Lage ist, Front- und Non-Front-Verkehr zu einer Domain zu unterscheiden, muss sich entscheiden, ob er Umgehungsverkehr zulässt oder die Domain komplett blockiert, was zu teuren Kollateralschäden führt.

Das Domainfronting erfordert keine besondere Zusammenarbeit der Netzvermittler. Wir identifizieren eine Reihe schwer zu blockierender Webservices, wie z.B. Content-Delivery-Netzwerke, die domänenbasierte Verbindungen unterstützen und für die Umgehung der Zensur nützlich sind.
