function solve(commands) {

    let totalCashInATM = 0;
    let banknotesInATM = [];
    
    for (const command of commands) {
        if (command.length > 2) {
            // INSERT
            let insertedCash = 0;
            for (const banknote of command) {
                banknotesInATM.push(banknote);
                totalCashInATM += banknote;
                insertedCash += banknote;
            }
            banknotesInATM.sort((a, b) => b - a);
            console.log(`Service Report: ${insertedCash}$ inserted. Current balance: ${totalCashInATM}$.`);
        } else if (command.length === 2) {
            // WITHDRAW
            let accountBalance = command[0];
            let withdrawingMoney = command[1];

            if (accountBalance < withdrawingMoney) {
                console.log(`Not enough money in your account. Account balance: ${accountBalance}$.`);
            } else if (totalCashInATM < withdrawingMoney) {
                console.log(`ATM machine is out of order!`);
            } else {
                let withdrawSum = 0;

                for (let i = 0; i < banknotesInATM.length; i++) {
                    let currBanknote = banknotesInATM[i];

                    if (currBanknote <= withdrawingMoney) {
                        withdrawSum += currBanknote;
                        
                        if (withdrawSum > withdrawingMoney) {
                            withdrawSum -= currBanknote;
                            continue;
                        }

                        totalCashInATM -= banknotesInATM.splice(i, 1)[0];
                        i--;

                        if (withdrawSum === withdrawingMoney) {
                            break;
                        }
                    }
                }
                
                accountBalance -= withdrawSum;
                console.log(`You get ${withdrawSum}$. Account balance: ${accountBalance}$. Thank you!`);
            }
        } else if (command.length === 1) {
            // REPORT
            let searcedBanknote = command[0];
            let banknoteCount = 0;

            for (const banknote of banknotesInATM) {
                if (banknote === searcedBanknote) {
                    banknoteCount++;
                }
            }

            console.log(`Service Report: Banknotes from ${searcedBanknote}$: ${banknoteCount}.`);
        }
    }
}

solve([
    [20, 5, 100, 20, 1],
    [457, 25],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500]
]);
