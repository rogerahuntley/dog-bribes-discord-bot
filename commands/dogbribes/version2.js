// todo: make this TS

// type saveData = {
//   data: {
//     flagsUnlocked: {
//       [key: string]: boolean
//     }
//     resources: {
//       [key: string]: number
//     }
//     resourcesTotal: {
//       [key: string]: number
//     }
//     purchasables: {
//       upgrades: {
//         [key: string]: number
//       }
//       goons: {
//         [key: string]: number
//       }
//       employees: {
//         [key: string]: number
//       }
//     }
//   }
// }

const version2 = (data) => {
  const resources = Object.entries(data.resources).map(([key, value]) => {
    if(value === 0 && !['money', 'puppies'].includes(key)) {
      return ""
    } else {
      return `${key}: ${value}`
    }
  }).filter(Boolean)

  return `Resources:\n${resources.join("\n")}`
}

export default version2