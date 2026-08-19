# Registro prompt

Questo documento raccoglie i prompt usati o pianificati per generare il progetto, come richiesto dalle linee guida d'esame.

## Prompt A1 - Ideazione e regolamento

Tool consigliato: ChatGPT, Claude o Gemini.

```text
Agisci come un esperto Game Designer di giochi di carte collezionabili e da tavolo. Sto creando un gioco di carte originale chiamato "Echoes of Aetheria". Il gioco si basa su 5 Carte Nodo (obiettivi), 28 Carte Catalizzatore (4 elementi: Fuoco, Acqua, Vento, Terra con valore da 1 a 3 ed effetti secondari) e 12 Carte Distorsione (azioni tattiche/interruzione). Scrivi il regolamento completo in italiano, strutturato con: 1. Setup, 2. Struttura del Turno, 3. Regole di Assegnazione dei Nodi, 4. Condizioni di Vittoria. Assicurati che il regolamento sia chiaro, privo di ambiguita e bilanciato per 2-4 giocatori.
```

## Prompt A2 - Database carte

Tool consigliato: ChatGPT, Claude o Gemini.

```text
Crea una tabella completa che elenchi tutte le 45 carte per "Echoes of Aetheria". La tabella deve contenere le seguenti colonne: [ID Carta, Nome Carta, Categoria (Nodo/Catalizzatore/Distorsione), Elemento/Tipo, Valore Potenza, Requisiti/Effetto speciale, Flavour Text]. Assicurati che le carte Catalizzatore siano equamente distribuite tra Fuoco, Acqua, Vento e Terra, e che i requisiti dei Nodi siano matematicamente raggiungibili in 4-6 turni.
```

## Prompt A3 - Playtest virtuale

Tool consigliato: ChatGPT, Claude o Gemini.

```text
Simula una partita a 2 giocatori a "Echoes of Aetheria" tracciando i primi 4 turni passo dopo passo. Mostra le carte in mano ai giocatori, le azioni scelte e lo stato dei Nodi al centro. Analizza se ci sono carte potenzialmente troppo forti o situazioni di stallo e proponi un piccolo aggiustamento di bilanciamento.
```

## Prompt B1 - Stile visivo di base

Tool consigliato: DALL-E, Midjourney, Flux o altro generatore immagini.

```text
Digital card game illustration, vibrant Aetheria magitech style, clean fantasy aesthetic, glowing runic energy, detailed cinematic lighting, high-resolution graphic vector style, isolated object on dark atmospheric background --ar 3:4
```

## Prompt B2 - Nodo campione

```text
An ancient magitech altar floating in a volcanic cavern, glowing orange runes, swirling fire energy, crystal core, digital card game art, clean fantasy aesthetic, cinematic lighting --ar 3:4
```

## Prompt B3 - Catalizzatore campione

```text
A pristine sphere of pure swirling water trapped inside a brass magitech ring, blue luminescence, floating droplets, card game item artwork, detailed digital painting --ar 3:4
```

## Prompt B4 - Distorsione campione

```text
A dramatic magical explosion shattering a glowing purple crystal barrier, unstable arcane energy, sparks and lightning, dynamic action perspective, card game spell illustration --ar 3:4
```

## Prompt C1 - Layout carta

Tool consigliato: Canva, Adobe Express, Figma o editor HTML/CSS.

```text
Crea un layout per una carta da gioco formato 63x88 mm. La carta deve avere: header con nome e categoria, riquadro immagine centrale, area testo con valore potenza, effetto speciale e flavour text, icone o indicatori per elemento, bordo leggibile e stile fantasy-magitech coerente. Mantieni il layout pulito, leggibile e stampabile.
```

## Iterazioni documentabili

- Versione iniziale: regole generiche con rischio di ambiguita nella stabilizzazione.
- Raffinamento 1: definita la maggioranza di potenza per assegnare i Nodi.
- Raffinamento 2: introdotti costi leggeri sui Catalizzatori valore 3.
- Raffinamento 3: uniformata la terminologia tra Nodo, Catalizzatore e Distorsione.
- Raffinamento 4: aggiunto un prototipo stampabile per verificare leggibilita e struttura della carta.
