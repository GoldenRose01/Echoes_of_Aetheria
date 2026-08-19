# Report tecnico - Echoes of Aetheria

## 1. Introduzione e concept generale

Echoes of Aetheria e un gioco di carte originale per 2-4 giocatori, progettato per partite da 15-20 minuti. Il tema combina fantasy e magitech: i giocatori sono Arcanisti che stabilizzano antichi Nodi eterici attraverso energie elementali.

L'obiettivo di game design e creare un gioco rapido, leggibile e rigiocabile, con interazione diretta moderata. La novita principale emerge dalla competizione sui Nodi condivisi: i giocatori possono contribuire agli stessi obiettivi, ma il Nodo viene assegnato a chi ha investito piu potenza.

## 2. Workflow e modelli generativi utilizzati

Il progetto e stato organizzato in tre fasi:

1. Ideazione e bilanciamento del gioco.
2. Generazione del database carte e dei prompt visivi.
3. Produzione della documentazione tecnica e del prototipo grafico.

Strumenti generativi previsti:

- LLM testuale per concept, regolamento, carte e playtest virtuale.
- Generatore immagini per artwork di Nodi, Catalizzatori e Distorsioni.
- Editor grafico o HTML/CSS per layout e impaginazione delle carte.

## 3. Prompt engineering e iterazioni

La prima serie di prompt ha definito la struttura base: 5 Nodi, 28 Catalizzatori e 12 Distorsioni. Successivamente i prompt sono stati raffinati per imporre vincoli numerici chiari:

- distribuzione equa dei Catalizzatori tra quattro elementi;
- valori di potenza compresi tra 1 e 3;
- Nodi completabili in circa 4-6 turni;
- effetti tattici senza eliminazioni eccessivamente punitive.

Per il visual design e stato scelto uno stile coerente: fantasy-magitech, energia runica luminosa, oggetti isolati su fondo scuro e formato verticale 3:4.

## 4. Logica di bilanciamento

Il mazzo contiene 28 Catalizzatori, cioe 7 per ciascun elemento. Ogni elemento ha:

- tre carte valore 1;
- tre carte valore 2;
- una carta valore 3.

Questa distribuzione rende frequenti le giocate intermedie e limita i picchi di potenza. Le carte valore 3 hanno piccoli costi o svantaggi per evitare accelerazioni incontrollate.

Le 12 Distorsioni sono divise tra:

- interferenza;
- movimento;
- difesa;
- controllo;
- recupero;
- accelerazione.

La loro funzione e creare interazione senza bloccare il gioco. Gli effetti modificano valori, spostano risorse o cambiano tempistiche, ma raramente distruggono definitivamente il piano di un giocatore.

## 5. Playtest virtuale

Il playtest simulato a 2 giocatori mostra che un Nodo puo essere stabilizzato entro il terzo turno se un giocatore investe in modo deciso e pesca le carte giuste. Gli altri Nodi rimangono contestabili, e le Distorsioni introducono abbastanza incertezza da evitare una strategia dominante immediata.

La carta piu delicata e D10 Impulso Gemello, perche consente una giocata gratuita. Il bilanciamento viene mantenuto limitandola ai Catalizzatori valore 1 e inserendone una sola copia.

## 6. Design delle carte

Il prototipo grafico usa un formato 63x88 mm. Ogni carta contiene:

- nome;
- categoria;
- elemento o tipo;
- valore di potenza, se presente;
- riquadro immagine;
- effetto o requisito;
- flavour text.

La palette usa elementi luminosi su sfondo scuro per richiamare cristalli, rune e tecnologia arcana. Le carte Nodo, Catalizzatore e Distorsione sono distinguibili tramite categoria e accenti cromatici.

## 7. Conclusioni

Echoes of Aetheria soddisfa i requisiti principali della consegna: e originale, giocabile da almeno 2 persone, dotato di regole formali, database carte, documentazione tecnica, prompt generativi e prototipo di layout. Il progetto puo essere esteso generando artwork finali per tutte le carte e impaginando il mazzo completo in formato PDF.

## 8. Appendice prompt

Il registro completo dei prompt e disponibile in `docs/prompt_log.md`.
