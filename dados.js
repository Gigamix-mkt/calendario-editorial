const CALENDARIO = {
  mes: '2026-05',
  label: 'Maio 2026',
  semanas: {
    '2026-05-04':'Semana 1 — Lançamento da campanha',
    '2026-05-06':'Semana 1 — Lançamento da campanha',
    '2026-05-08':'Semana 1 — Lançamento da campanha',
    '2026-05-11':'Semana 2 — Campanha Protocolo Blindado',
    '2026-05-13':'Semana 2 — Prova social',
    '2026-05-15':'Semana 2 — Objeção de preço',
    '2026-05-18':'Semana 3 — Autoridade científica',
    '2026-05-20':'Semana 3 — Campanha · Combos',
    '2026-05-22':'Semana 3 — Conversão',
    '2026-05-25':'Semana 4 — Branding premium',
    '2026-05-27':'Semana 4 — Pipeline treinamento',
    '2026-05-29':'Semana 4 — Fechamento de maio',
    '2026-06-03':'Semana 1 Junho — Mecanismo Scudero',
    '2026-06-10':'Semana 2 Junho — Tripé dos produtos',
    '2026-06-17':'Semana 3 Junho — Diferencial formulação',
    '2026-06-24':'Semana 4 Junho — Urgência pré-safra',
    '2026-07-08':'Semana 2 Julho — Autoridade científica',
    '2026-07-15':'Semana 3 Julho — Planejamento safra',
    '2026-07-22':'Semana 4 Julho — Reta final campanha',
    '2026-07-28':'Semana 4 Julho — Countdown encerramento',
  },
  posts: {
    /* ─── MAIO ─────────────────────────────────────────── */
    '2026-05-04':[{
      id:101, tipo:'conteudo', title:'Nem todo Silício é igual. O seu está sendo absorvido?',
      canal:'instagram', status:'agendado', objetivo:'Educar — Quebrar objeção principal',
      headline:'Nem todo Silício é igual.\nO seu está sendo absorvido?',
      subtext:'Tecnologia que entra na planta. Resultado que aparece na lavoura.',
      legenda:`Muito do que é vendido como Silício no mercado é, na verdade, SiO₂ — silicato. Uma molécula que a planta simplesmente não consegue absorver.

A Gigamix desenvolveu uma tecnologia onde a molécula de Silício é reduzida a um nível menor que uma bactéria. Absorção real.

22 anos de pesquisa. Resultado que aparece na lavoura.

🌱 Quer saber se o Silício que você usa realmente funciona?

👇 Chama no WhatsApp — link na bio.`
    }],
    '2026-05-06':[{
      id:102, tipo:'conteudo', title:'Ferrugem, Míldio, Oídio — Um produto, cinco ameaças',
      canal:'instagram', status:'agendado', objetivo:'Autoridade técnica — Scudero Ultra',
      headline:'Um produto. Cinco ameaças controladas.',
      subtext:'Scudero Ultra — escudo físico e químico para sua soja.',
      legenda:`O Scudero Ultra não é um fungicida. É um fertilizante foliar à base de Silício que induz resistência natural na planta.

Testado pela Fundação Agrária de Pesquisa Agropecuária: controle das 5 principais doenças da soja.

🔬 Tecnologia com resultado documentado no campo.

📲 WhatsApp — link na bio.`
    }],
    '2026-05-08':[{
      id:103, tipo:'campanha', title:'CAMPANHA — Lançamento Protocolo Blindado · Teaser',
      canal:'carrossel', status:'agendado', objetivo:'Lançar a campanha e gerar curiosidade',
      headline:'Protocolo Blindado.\nO jeito mais completo de proteger sua lavoura.',
      subtext:'Scudero + Plus + RZN — 10% de vantagem. Por tempo limitado.',
      legenda:`Três produtos. Um protocolo. Proteção de ponta a ponta.

✅ Scudero Ultra — defesa contra doenças foliares
✅ Gigamix Plus — fortalecimento e resistência
✅ RZN — enraizamento e vigor

Combo C01: Scudero + Plus + RZN → 10% de vantagem
Combos parciais → 5% de vantagem

⏳ Por tempo limitado. Campanha válida até 30/05.

📲 Falar com RC Gigamix — link na bio.`
    }],
    '2026-05-11':[{
      id:104, tipo:'campanha', title:'CAMPANHA — Tabela de combos Protocolo Blindado',
      canal:'carrossel', status:'agendado', objetivo:'Apresentar os 4 combos com clareza',
      headline:'4 combos. Escolha o que a sua lavoura precisa.',
      subtext:'Protocolo Blindado Gigamix — até 10% de vantagem.',
      legenda:`Slide 1: Capa — 4 combos disponíveis
Slide 2: C01 — Scudero + Plus + RZN → 10%
Slide 3: C02 — Scudero + Plus → 5%
Slide 4: C03 — Scudero + RZN → 5%
Slide 5: C04 — Plus + RZN → 5%
Slide 6: CTA — Falar com RC

A proteção certa para o tamanho da sua necessidade.

📲 Consultar RC — link na bio.`
    }],
    '2026-05-11':[{
      id:104, tipo:'campanha', title:'CAMPANHA — Tabela de combos Protocolo Blindado',
      canal:'carrossel', status:'agendado', objetivo:'Apresentar os 4 combos com clareza',
      headline:'4 combos. Escolha o que a sua lavoura precisa.',
      legenda:`C01: Scudero + Plus + RZN → 10% de vantagem\nC02: Scudero + Plus → 5%\nC03: Scudero + RZN → 5%\nC04: Plus + RZN → 5%\n\n📲 Falar com RC — link na bio.`
    }],
    '2026-05-13':[{
      id:105, tipo:'conteudo', title:'Case real — Produtividade documentada no campo',
      canal:'carrossel', status:'ideia', objetivo:'Prova social — preencher com dados reais',
      headline:'Resultado documentado.\nNão é promessa, é lavoura.',
      legenda:`[PREENCHER COM CASE REAL]\n\nProdutor: ___\nCultura: ___\nRegião: ___\nResultado: ___\n\n📸 Foto da lavoura na arte.`
    }],
    '2026-05-14':[{
      id:1051, tipo:'darkpost', title:'DARK POST — Conversão C01 · Soja · Lookalike produtores',
      canal:'dark post', status:'agendado', objetivo:'Conversão direta — fundo de funil',
      headline:'Sem Silício real, a defesa da sua soja tem buracos.',
      legenda:`[BRIEFING AGÊNCIA]\n\nSegmentação: Lookalike produtores de soja · PR, MT, GO\nFormato: Card estático + carrossel\nObjetivo: Conversão (lead WhatsApp)\nCTA: "Quero o protocolo"\n\nCopy:\nScudero + Plus + RZN. O protocolo que fecha a vulnerabilidade da lavoura de dentro pra fora.\n\nC01 com 10% de vantagem. Só até 30/05.\n\n📲 Falar com RC agora.`
    }],
    '2026-05-15':[{
      id:106, tipo:'conteudo', title:'O insumo mais barato pode estar custando sua safra',
      canal:'instagram', status:'agendado', objetivo:'Quebrar objeção de preço',
      headline:'O insumo mais barato pode\nestar custando sua safra.',
      legenda:`No agronegócio, o custo na nota raramente é o custo real.\n\n❌ Silício que a planta não absorve\n❌ Fungicida trabalhando no limite\n❌ Produtividade abaixo do potencial\n\nA Gigamix não compete por preço. Compete por resultado.\n\n📲 Link na bio.`
    }],
    '2026-05-18':[{
      id:107, tipo:'conteudo', title:'Fundação Agrária comprova — 5 doenças controladas',
      canal:'instagram', status:'agendado', objetivo:'Credibilidade científica',
      headline:'Pesquisa comprova.\n5 doenças da soja controladas.',
      legenda:`Não é marketing. É ciência.\n\n🔬 Ferrugem · Míldio · Oídio · Bacteriose · Cercospora\n\nFundação Agrária de Pesquisa Agropecuária — resultado documentado.\n\n📲 WhatsApp.`
    }],
    '2026-05-20':[{
      id:108, tipo:'conteudo', title:'3 sinais de que sua lavoura precisa de Silício',
      canal:'carrossel', status:'agendado', objetivo:'Alcance orgânico — salvar e compartilhar',
      headline:'3 sinais de que sua lavoura\nestá pedindo Silício.',
      legenda:`Slide 1: Capa\nSlide 2: Baixa resistência a doenças\nSlide 3: Estresse hídrico frequente\nSlide 4: Produtividade abaixo do potencial\nSlide 5: CTA Gigamix\n\n💾 Salva esse post.`
    }],
    '2026-05-21':[{
      id:1081, tipo:'darkpost', title:'DARK POST — Urgência · Campanha metade do prazo',
      canal:'dark post', status:'agendado', objetivo:'Reativação — meio de funil',
      headline:'Faltam 10 dias. O protocolo ainda está disponível.',
      legenda:`[BRIEFING AGÊNCIA]\n\nSegmentação: Retargeting visitantes site + engajamento Instagram 30d\nFormato: Story + Feed card\nObjetivo: Reengajamento → WhatsApp\nCTA: "Ver condições ainda disponíveis"\n\nCopy:\nO Protocolo Blindado Gigamix encerra em 10 dias. Quem garantiu o C01 ainda tem 10% de vantagem.\n\nSe você ainda não falou com o RC, agora é a hora.\n\n📲 Falar antes que encerre.`
    }],
    '2026-05-22':[{
      id:109, tipo:'campanha', title:'CAMPANHA — CTA final · Reforço com urgência',
      canal:'instagram', status:'agendado', objetivo:'Conversão — Fechamento da campanha',
      headline:'Sua safra começa na escolha\ndo insumo certo.',
      legenda:`O produtor que vai na frente não escolhe o mais barato. Escolhe o que comprova.\n\n🌱 22 anos · 3 formulações · 3 países\n\nProtocolo Blindado até 30/05.\n\n📲 Fala agora — link na bio.`
    }],
    '2026-05-25':[{
      id:110, tipo:'conteudo', title:'Nº 1 em Silício no Brasil — Branding institucional',
      canal:'instagram', status:'agendado', objetivo:'Branding / Posicionamento premium',
      headline:'Nº 1 em Silício no Brasil.\n22 anos. 3 formulações. Resultado real.',
      legenda:`💧 Líquido · 🌾 Granulado · 🌫️ Pó\n\nBrasil, Paraguai, Bolívia e Angola.\n\nO campo evoluiu. O Silício Gigamix evoluiu junto.\n\n📲 Link na bio.`
    }],
    '2026-05-27':[{
      id:111, tipo:'conteudo', title:'Teaser — Treinamento com Gustavo Pazzetti',
      canal:'instagram', status:'ideia', objetivo:'Gerar expectativa — pipeline treinamento',
      headline:'Em breve: tudo sobre Silício\ncom quem pesquisa.',
      legenda:`Nem toda informação sobre Silício vem do marketing.\n\nAlguma vem do laboratório.\n\nEm breve com @gustavopazzetti, pesquisador parceiro da Gigamix.\n\nAtiva o sininho. 🔔`
    }],
    '2026-05-28':[{
      id:1111, tipo:'darkpost', title:'DARK POST — Encerramento campanha · Countdown 2 dias',
      canal:'dark post', status:'agendado', objetivo:'Urgência máxima — últimas 48h',
      headline:'2 dias. Depois o preço volta ao normal.',
      legenda:`[BRIEFING AGÊNCIA]\n\nSegmentação: Todos que interagiram + visitantes + lookalike ampliado\nFormato: Story animado com contador + Feed card\nObjetivo: Conversão final\nCTA: "Garantir agora"\n\nCopy:\nO Protocolo Blindado encerra em 2 dias. Quem não garantiu perde a condição especial.\n\nC01 — Scudero + Plus + RZN: 10% de vantagem. Só até 30/05.\n\n📲 Falar com RC Gigamix agora.`
    }],
    '2026-05-29':[{
      id:112, tipo:'campanha', title:'CAMPANHA — Fechamento de maio · CTA final',
      canal:'instagram', status:'agendado', objetivo:'Conversão final + encerramento',
      headline:'Maio termina.\nA vantagem por antecipação, não.',
      legenda:`Um mês de conteúdo sobre defesa, resistência e enraizamento. Agora é hora de agir.\n\nProtocolo Safra Protegida ainda disponível com até 10% de vantagem.\n\nJunho está chegando. A sua safra não pode esperar.\n\n📲 Fala com seu RC Gigamix. Link na bio.`
    }],

    /* ─── JUNHO ─────────────────────────────────────────── */
    '2026-06-03':[{
      id:201, tipo:'campanha', title:'CAMPANHA — Mecanismo do Scudero Ultra · Como funciona',
      canal:'carrossel', status:'agendado', objetivo:'Autoridade técnica — Junho S1',
      headline:'Por que o Scudero Ultra funciona\nquando outros não chegam lá.',
      legenda:`Slide 1: Capa\nSlide 2: O patógeno tenta entrar pela folha — Scudero já está lá\nSlide 3: Silício forma camada física na epiderme — barreira real\nSlide 4: Indução de resistência ativa as defesas naturais da planta\nSlide 5: Resultado: menos doença, menos fungicida, mais produtividade\nSlide 6: CTA — Protocolo Blindado com condição de antecipação\n\n📲 Link na bio.`
    },{
      id:2011, tipo:'darkpost', title:'DARK POST — Mecanismo Scudero · Top of funnel',
      canal:'dark post', status:'agendado', objetivo:'Alcance e educação — junho S1',
      headline:'Sua planta tem defesa natural. Você está ativando ela?',
      legenda:`[BRIEFING AGÊNCIA]\n\nSegmentação: Produtores soja e milho · PR, SP, MT, GO · cold audience\nFormato: Vídeo 15s ou carrossel\nObjetivo: Alcance → tráfego para perfil\nCTA: "Entender como funciona"\n\nCopy:\nO Scudero Ultra não trata a doença. Ele impede que ela entre.\n\nSilício real que ativa a barreira física e os mecanismos de defesa da planta.\n\n📲 Saiba mais.`
    }],
    '2026-06-10':[{
      id:202, tipo:'campanha', title:'CAMPANHA — Tripé dos produtos · Por que os 3 juntos',
      canal:'carrossel', status:'agendado', objetivo:'Educar sobre o protocolo — Junho S2',
      headline:'Scudero + Plus + RZN.\nPor que o protocolo completo funciona.',
      legenda:`Slide 1: Capa\nSlide 2: Scudero — defesa foliar (de cima pra baixo)\nSlide 3: Plus — equilíbrio nutricional e resistência\nSlide 4: RZN — raiz forte, absorção real (de baixo pra cima)\nSlide 5: Juntos fecham o ciclo completo da planta\nSlide 6: CTA — Consultar RC sobre os combos\n\n📲 Link na bio.`
    },{
      id:2021, tipo:'darkpost', title:'DARK POST — Retargeting engajados S1 junho',
      canal:'dark post', status:'agendado', objetivo:'Meio de funil — conversão soft',
      headline:'Você viu como o Scudero funciona. Agora conheça o protocolo completo.',
      legenda:`[BRIEFING AGÊNCIA]\n\nSegmentação: Retargeting engajados post S1 + visitantes site\nFormato: Card + CTA para WhatsApp\nObjetivo: Lead WhatsApp\nCTA: "Ver condições do protocolo"\n\nCopy:\nTrês produtos que trabalham juntos para a proteção completa da lavoura.\n\nScudero + Plus + RZN — Protocolo Blindado Gigamix.\n\n📲 Consultar condições.`
    }],
    '2026-06-17':[{
      id:203, tipo:'campanha', title:'CAMPANHA — Diferencial da formulação Gigamix',
      canal:'instagram', status:'agendado', objetivo:'Diferenciação vs concorrência — Junho S3',
      headline:'Não é o produto que faz diferença.\nÉ a formulação.',
      legenda:`A maioria vende SiO₂. A planta não absorve.\n\nA Gigamix formula Silício nas 3 formas únicas do mercado:\n💧 Líquido · 🌾 Granulado · 🌫️ Pó\n\nTodos com absorção real. Todos com resultado documentado.\n\n22 anos de pesquisa separando o que funciona do que não funciona.\n\n📲 Link na bio.`
    },{
      id:2031, tipo:'darkpost', title:'DARK POST — Comparativo Gigamix vs SiO₂ · Conversão',
      canal:'dark post', status:'agendado', objetivo:'Fundo de funil — diferenciação',
      headline:'Você já tentou Silício antes. Mas era SiO₂?',
      legenda:`[BRIEFING AGÊNCIA]\n\nSegmentação: Lookalike clientes Gigamix + produtores que buscaram fertilizantes\nFormato: Card comparativo ou vídeo 20s\nObjetivo: Conversão → WhatsApp\nCTA: "Quero o Silício que funciona"\n\nCopy:\nSiO₂ não é absorvido pela planta. É vendido como Silício, mas não entrega.\n\nA Gigamix é diferente. 22 anos desenvolvendo a formulação certa.\n\n📲 Falar com especialista.`
    }],
    '2026-06-24':[{
      id:204, tipo:'campanha', title:'CAMPANHA — Urgência pré-safra · Planejamento começa agora',
      canal:'carrossel', status:'agendado', objetivo:'Urgência e antecipação — Junho S4',
      headline:'Quem planeja a safra em julho\ncolhe diferente em março.',
      legenda:`Slide 1: Capa\nSlide 2: Safra começa antes do plantio — insumo certo agora\nSlide 3: Scudero Ultra — proteção foliar desde o início\nSlide 4: Plus — equilíbrio nutricional no ciclo todo\nSlide 5: RZN — raiz que sustenta a produção\nSlide 6: CTA — Falar com RC para planejar safra\n\n📲 Consultar RC — link na bio.`
    },{
      id:2041, tipo:'darkpost', title:'DARK POST — Antecipação safra · Algodão e milho',
      canal:'dark post', status:'agendado', objetivo:'Segmentação algodão e milho',
      headline:'Algodão e milho pedem Silício desde o início.',
      legenda:`[BRIEFING AGÊNCIA]\n\nSegmentação: Produtores algodão (BA, MT) + milho (PR, GO, SP)\nFormato: Card + vídeo curto\nObjetivo: Lead WhatsApp\nCTA: "Planejar safra com RC"\n\nCopy:\nAlgodão e milho respondem ao Silício desde o enraizamento.\n\nProtocolo Gigamix para as suas culturas — garanta antes da safra.\n\n📲 Falar com RC agora.`
    }],

    /* ─── JULHO ─────────────────────────────────────────── */
    '2026-07-08':[{
      id:301, tipo:'campanha', title:'CAMPANHA — Autoridade científica · Material Gustavo Pazzetti',
      canal:'carrossel', status:'agendado', objetivo:'Credibilidade científica — Julho S2',
      headline:'Silício com respaldo de pesquisa.\nNão é marketing, é laboratório.',
      legenda:`Slide 1: Capa com @gustavopazzetti\nSlide 2: O que a pesquisa mostrou sobre absorção de Silício\nSlide 3: Diferença entre SiO₂ e Silício real nas análises\nSlide 4: Resultados documentados em campo\nSlide 5: Gigamix — a formulação que o pesquisador valida\nSlide 6: CTA\n\n📲 Link na bio.`
    },{
      id:3011, tipo:'darkpost', title:'DARK POST — Autoridade científica · Top of funnel frio',
      canal:'dark post', status:'agendado', objetivo:'Alcance com credibilidade',
      headline:'O pesquisador testou. O produtor aprovou.',
      legenda:`[BRIEFING AGÊNCIA]\n\nSegmentação: Cold audience amplo · produtores e agrônomos\nFormato: Vídeo com trecho do Gustavo + card\nObjetivo: Alcance e reconhecimento de marca\nCTA: "Ver resultado da pesquisa"\n\nCopy:\nNem toda informação sobre Silício vem do marketing. Alguma vem do laboratório.\n\n@gustavopazzetti, pesquisador parceiro Gigamix, explica por que a formulação importa.\n\n📲 Saiba mais.`
    }],
    '2026-07-15':[{
      id:302, tipo:'conteudo', title:'Planejamento de safra · Por que o Silício entra primeiro',
      canal:'instagram', status:'agendado', objetivo:'Educação safra — Julho S3',
      headline:'A safra que vai bem em março\nfoi planejada em julho.',
      legenda:`Quem chega no plantio sem o protocolo certo começa atrás.\n\nSilício real desde o início:\n🌱 Raiz mais desenvolvida\n🛡️ Defesa ativada antes do estresse\n📈 Produtividade documentada\n\nA Gigamix está aqui para planejar junto.\n\n📲 Falar com RC — link na bio.`
    },{
      id:3021, tipo:'darkpost', title:'DARK POST — Planejamento safra · Retargeting junho',
      canal:'dark post', status:'agendado', objetivo:'Reativação leads não convertidos',
      headline:'Você pesquisou em junho. A safra não espera.',
      legenda:`[BRIEFING AGÊNCIA]\n\nSegmentação: Retargeting todos os engajados maio-junho + visitantes site\nFormato: Card urgência + story\nObjetivo: Reativação → WhatsApp\nCTA: "Planejar antes do plantio"\n\nCopy:\nA janela de planejamento está fechando. Quem garante o protocolo agora chega no plantio com tudo pronto.\n\nProtocolo Gigamix — consulte o RC.\n\n📲 Falar agora.`
    }],
    '2026-07-22':[{
      id:303, tipo:'campanha', title:'CAMPANHA — Reta final · Última chance condições especiais',
      canal:'carrossel', status:'agendado', objetivo:'Urgência máxima — Julho S4',
      headline:'Reta final.\nÚltima chance para garantir o protocolo com vantagem.',
      legenda:`Slide 1: Capa urgência\nSlide 2: C01 — Scudero + Plus + RZN → ainda disponível\nSlide 3: O que muda sem o protocolo na safra\nSlide 4: Depoimento / case de produtor\nSlide 5: CTA — prazo real\n\n⚠️ Condições encerram em 28/07.\n\n📲 Garantir agora — link na bio.`
    }],
    '2026-07-28':[{
      id:304, tipo:'darkpost', title:'DARK POST — Countdown final · Encerramento 28/07',
      canal:'dark post', status:'agendado', objetivo:'Urgência máxima — último dia',
      headline:'Hoje é o último dia. Depois volta ao preço cheio.',
      legenda:`[BRIEFING AGÊNCIA]\n\nSegmentação: TODOS os públicos — retargeting total + lookalike\nFormato: Story animado com contador regressivo + Feed urgência\nObjetivo: Conversão máxima\nCTA: "Garantir agora — último dia"\nHorário sugerido: 7h + 12h + 18h\n\nCopy:\nO Protocolo Blindado Gigamix encerra hoje.\nDepois disso, preço cheio.\n\nC01 — Scudero + Plus + RZN: 10% de vantagem.\nSó até meia-noite de hoje.\n\n📲 Falar com RC AGORA.`
    },{
      id:305, tipo:'campanha', title:'CAMPANHA — Encerramento oficial campanha',
      canal:'instagram', status:'agendado', objetivo:'Encerramento e ponte para pós-campanha',
      headline:'A campanha encerrou.\nMas a Gigamix continua aqui.',
      legenda:`O Protocolo Blindado foi um sucesso. Produtores de todo o Brasil garantiram a proteção da safra com tecnologia real.\n\nPara quem ficou de fora: o atendimento continua. A tecnologia não muda.\n\n🌱 22 anos. 3 formulações. Resultado real.\n\n📲 Falar com RC Gigamix.`
    }],
  }
};
