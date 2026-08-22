// ============================================
// DADOS DO PLANO ALIMENTAR - COMPOSIÇÃO CORPORAL
// ============================================
// Edite apenas os valores abaixo para atualizar seu plano.
// Não altere os nomes das variáveis (ex: "metas", "refeicoes").
// ============================================

const dadosPlano = {

    // ----- METAS DIÁRIAS -----
    metas: {
        calorias: 1584,
        proteina: "130–150",
        carboidratos: "140–170",
        gordura: 45,
        fibras: 18
    },

    // ----- DADOS PESSOAIS E META FINAL -----
    perfil: {
        idade: 40,
        altura: "1,77m",
        dataInicio: "18/08/2026",
        pesoInicial: 74.3,
        gorduraInicial: 22.9,
        pesoAlvo: "69–70",
        gorduraAlvo: 17,
        prazo: "9–12 semanas"
    },

    // ----- REFEIÇÕES (plano alimentar) -----
    refeicoes: [
        {
            id: "cafe",
            nome: "🌅 Café da manhã",
            itens: "2 ovos mexidos + 1 fatia pão integral + 1 fruta + 1 iogurte (170g) + 2 fatias queijo mussarela light (30g)",
            kcal: 597,   // 515 + 82
            prot: 39.4,  // 31 + 8.4
            carb: 54.1,  // 54 + 0.1
            gor: 23.4,   // 18 + 5.4
            fibras: 6.5  // mantido
        },
        {
            id: "almoco",
            nome: "☀️ Almoço",
            itens: "Marmita Liv Up (média) - arroz, feijão, carne",
            kcal: 402,
            prot: 28,
            carb: 51.4,
            gor: 9.2,
            fibras: 5
        },
        {
            id: "lanche",
            nome: "🌆 Lanche da tarde",
            itens: "30g leite em pó + 15g aveia + 1 scoop whey",
            kcal: 265,
            prot: 30,
            carb: 28,
            gor: 9,
            fibras: 1.5
        },
        {
            id: "jantar",
            nome: "🌙 Jantar",
            itens: "Marmita Liv Up (média) - arroz, feijão, carne",
            kcal: 402,
            prot: 28,
            carb: 51.4,
            gor: 9.2,
            fibras: 5
        }
    ],

    // ----- TOTAIS (cálculo automático) -----
    get totais() {
        const total = { kcal: 0, prot: 0, carb: 0, gor: 0, fibras: 0 };
        this.refeicoes.forEach(r => {
            total.kcal += r.kcal;
            total.prot += r.prot;
            total.carb += r.carb;
            total.gor += r.gor;
            total.fibras += r.fibras;
        });
        return total;
    },

    // ----- MACROS POR INGREDIENTE (tabela de referência) -----
    ingredientes: [
        { nome: "1 ovo (50g)", kcal: 75, prot: 6, carb: 0, gor: 5, fibras: 0 },
        { nome: "1 fatia pão integral (50g)", kcal: 120, prot: 4, carb: 22, gor: 1.5, fibras: 2 },
        { nome: "1 fruta média (banana/maçã)", kcal: 100, prot: 1, carb: 25, gor: 0.5, fibras: 3 },
        { nome: "Iogurte natural (170g)", kcal: 120, prot: 6, carb: 12, gor: 5, fibras: 0 },
        { nome: "Leite em pó (30g)", kcal: 110, prot: 10, carb: 12, gor: 6, fibras: 0 },
        { nome: "Aveia (15g)", kcal: 57, prot: 2, carb: 10, gor: 1, fibras: 1.5 },
        { nome: "Whey (1 scoop ~15g)", kcal: 60, prot: 12, carb: 2, gor: 1, fibras: 0 },
        { nome: "Marmita Liv Up (média)", kcal: 402, prot: 28, carb: 51.4, gor: 9.2, fibras: 5 },
        { nome: "Queijo mussarela light (30g)", kcal: 82, prot: 8.4, carb: 0.1, gor: 5.4, fibras: 0 }
    ],

    // ----- HÁBITOS (apenas para referência) -----
    habitos: [
        "💧 Água: 2,5L",
        "😴 Sono: 7–8h",
        "🏋️ Treino: 3x/semana"
    ],

    // ----- OBSERVAÇÃO (removida) -----
    observacao: ""

};