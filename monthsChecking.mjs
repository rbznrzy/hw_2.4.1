import { months } from "./data/monthsData.mjs";
import { expencesExamples } from "./data/yearlyExpensesData.mjs";
import { MonthExpencesChecking } from "./functions/monthExpencesCheck.mjs";

let month = new MonthExpencesChecking

month.monthExpencesChecking(expencesExamples, months)
