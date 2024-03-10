export class MonthExpencesChecking {
    monthExpencesChecking(expencesExamples, months) {
        expencesExamples.forEach((example) => {
            example.yearlyExpences.forEach((expences, index) => {
                if (expences <= 1000) {
                    console.log(`Траты <= 1000 наблюдались в следующих месяцах ${months[index]}`)
                }
            });
        });
    }
}