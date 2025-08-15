const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ฟังก์ชันช่วยแปลง string เป็น float และตรวจสอบ
function parseInput(input, name) {
  const val = parseFloat(input);
  if (isNaN(val)) {
    console.log(`${name} ต้องเป็นตัวเลข!`);
    process.exit(1);
  }
  return val;
}

rl.question("Enter Voltage (V): ", function(V_input) {
  rl.question("Enter Current (A): ", function(I_input) {
    rl.question("Enter Power Factor (PF): ", function(PF_input) {
      rl.question("Enter Hours used: ", function(hours_input) {

        // แปลงค่า input เป็นตัวเลข
        const V = parseInput(V_input, "Voltage");
        const I = parseInput(I_input, "Current");
        const PF = parseInput(PF_input, "Power Factor");
        const hours = parseInput(hours_input, "Hours");

        // คำนวณ Active, Reactive, Apparent Power
        const P = V * I * PF;
        const P_kW = P / 1000;
        const S = V * I;
        const S_kVA = S / 1000;
        const Q = Math.sqrt(S * S - P * P);
        const Q_kVAR = Q / 1000;
        const E_kWh = P_kW * hours;

        // ค่าไฟขั้นบันได
        let cost = 0;
        if (E_kWh <= 150) cost = E_kWh * 3.75;
        else if (E_kWh <= 400) cost = 150 * 3.75 + (E_kWh - 150) * 4.5;
        else if (E_kWh <= 1000) cost = 150 * 3.75 + 250 * 4.5 + (E_kWh - 400) * 4.85;
        else cost = 150 * 3.75 + 250 * 4.5 + 600 * 4.85 + (E_kWh - 1000) * 5;

        // สร้างข้อความผลลัพธ์
        const output = `--- Electricity Calculation Result ---\nVoltage (V): ${V}\nCurrent (A): ${I}\nPower Factor (PF): ${PF}\nHours used: ${hours}\n\nActive Power (P): ${P_kW.toFixed(2)} kW\nReactive Power (Q): ${Q_kVAR.toFixed(2)} kVAR\nApparent Power (S): ${S_kVA.toFixed(2)} kVA\nEnergy used: ${E_kWh.toFixed(2)} kWh\nElectricity Cost: ${cost.toFixed(2)} Baht`;

        // แสดงผลบน console
        console.log(output);

        // บันทึกลงไฟล์ electricity.txt
        fs.writeFile('electrical_result_calculation.txt', output, (err) => {
          if (err) console.error("Error writing file:", err);
          else console.log("File 'electrical_result_calculation.txt' saved successfully!");
          rl.close();
        });
      });
    });
  });
});
