## Domain Fronting ist eine vielseitige Technik zur Umgehung der Zensur, die den entfernten Endpunkt einer Kommunikation verbirgt.
Es wird zuerst eine HTTPS Verbindung mit einem vom Zensor zugelassenen Endpunkt etabliert, die daraufhin zum eigentlichen Endpunkt weitergeleitet wird.

Die Idee dahinter ist verschiedene Domains auf unterschiedlichen Ebenen der Kommunikation zu nutzen. Eine Domain erscheint als “äußere Domain” bei einer HTTPS Anfrage - in der DNS Anfrage und der TLS Server Name Indication - während eine zweite “innere Domain” im HTTP Host Header benutzt wird, unsichtbar für den Zensor unter HTTPS Verschlüsselung. Der Zensor kann die nun versteckte Kommunikation nicht identifizieren und muss sich entscheiden ob er den weitergeleiteten Datenverkehr erlaubt, oder die “äußere Domain” vollständig blockt, was zu schwerwiegenden Folgekosten führt.

Domain Fronting erfordert keinerlei spezielle Kooperation durch Mittelsmänner. Wir haben eine Reihe schwer zu blockierender Web-Services wie Content Delivery Networks identifiziert, die versteckte Kommunikation unterstützen und nützlich für die Umgehung von Zensur sind.
