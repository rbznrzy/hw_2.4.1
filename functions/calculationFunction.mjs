export class Calculation {
    expencesCalculation(expencesExamples) {
        expencesExamples.forEach((example) => {
            let totalExpences = 0;
            example.yearlyExpences.forEach((expences) => {
                if (expences > 1000) {
                    totalExpences += expences;
                }
            });
            return console.log(`Сумма затрат выше 1000 для примера ${totalExpences}`);
        });
    }
}
