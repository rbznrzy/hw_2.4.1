import { Calculation } from "./functions/calculationFunction.mjs";
import { expencesExamples } from "./data/yearlyExpensesData.mjs";

let expences = new Calculation;

expences.expencesCalculation(expencesExamples)