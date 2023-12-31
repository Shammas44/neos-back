import { SECTIONS } from "../data/common.js";
import faker from './config.js'

export const cda = [
  { cda: "1000", name: "Trésorerie" },
  { cda: "1010", name: "Banque principale" },
  { cda: "1020", name: "Banque secondaire" },
  { cda: "1030", name: "Caisse" },
  { cda: "2000", name: "Clients" },
  { cda: "2010", name: "Clients - Formation professionnelle" },
  { cda: "2020", name: "Clients - Formation continue" },
  { cda: "2030", name: "Clients - Stages" },
  { cda: "2040", name: "Clients - Ateliers" },
  { cda: "2050", name: "Clients - Séminaires" },
  { cda: "3000", name: "Fournisseurs" },
  { cda: "3010", name: "Fournisseurs - Matériel de formation" },
  { cda: "3020", name: "Fournisseurs - Services de formation" },
  { cda: "3030", name: "Fournisseurs - Repas et traiteurs" },
  { cda: "3040", name: "Fournisseurs - Hébergement" },
  { cda: "4000", name: "Personnel" },
  { cda: "4010", name: "Salaires - Formation" },
  { cda: "4020", name: "Charges sociales - Formation" },
  { cda: "4030", name: "Salaires - Administration" },
  { cda: "4040", name: "Charges sociales - Administration" },
  { cda: "5000", name: "Formations" },
  { cda: "5010", name: "Formation professionnelle" },
  { cda: "5020", name: "Formation continue" },
  { cda: "5030", name: "Stages" },
  { cda: "5040", name: "Ateliers" },
  { cda: "5050", name: "Séminaires" },
  { cda: "6000", name: "Matériel de formation" },
  { cda: "6010", name: "Ordinateurs" },
  { cda: "6020", name: "Projecteurs" },
  { cda: "6030", name: "Tableaux blancs" },
  { cda: "6040", name: "Supports de cours" },
  { cda: "6050", name: "Matériel pédagogique" },
  { cda: "7000", name: "Services de formation" },
  { cda: "7010", name: "Formateurs externes" },
  { cda: "7020", name: "Consultants" },
  { cda: "7030", name: "Intervenants spécialisés" },
  { cda: "8000", name: "Publicité et promotion" },
  { cda: "8010", name: "Publicité - Médias" },
  { cda: "8020", name: "Publicité - En ligne" },
  { cda: "8030", name: "Promotion - Événements" },
  { cda: "9000", name: "Charges diverses" },
  { cda: "9010", name: "Frais administratifs" },
  { cda: "9020", name: "Frais de déplacement" },
  { cda: "9030", name: "Frais de représentation" },
  { cda: "9040", name: "Frais de formation" },
  { cda: "9050", name: "Frais de documentation" },
  { cda: "9060", name: "Frais de reprographie" },
  { cda: "9070", name: "Frais de communication" },
  { cda: "9080", name: "Frais de bureau" },
  { cda: "9090", name: "Autres charges" },
]

const data = []
for (const item of cda) {

  data.push(
    {
      id: item.cda,
      name: item.name,
      isSection: false,
    }
  )
}

const base = Number(cda[cda.length - 1].cda) + 10
SECTIONS.forEach((section, i) => {
  const name = section[0].toLowerCase()
  data.push(
    {
      id: String(base + (i * 10)),
      name: `Section ${name}`,
      isSection: String(true),
      customerInvoiceBudget: String(faker.number.int({ min: 30000, max: 100000 })),
      internerBudget: String(faker.number.int({ min: 2000, max: 40000 })),
      site: section[1]
    }
  )
})
export default data
