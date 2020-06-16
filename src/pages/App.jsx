import React, { Component } from 'react'
import { calculateSalaryFrom } from '../utils/salary';
import InputFullSalary from '../components/InputFullSalary';
import InputReadOnly from '../components/InputReadOnly';
import ProgressBarSalary from '../components/ProgressBarSalary';

import { Section, Header, Footer } from './styles';

export default class App extends Component {
  constructor() {
    super();

    this.state = { fullSalary: 1000 }

    this.calculate = calculateSalaryFrom;
  }

  handleWage = (event) => {
    const newWage = event.target.value;

    this.setState({ fullSalary: newWage })
  }

  render() {
    const { fullSalary } = this.state;

    const {
      baseINSS,
      discountINSS,
      deductionInssPerc,
      baseIRPF,
      discountIRPF,
      deductionIrpfPerc,
      netSalary,
      balancePercentage
    } = this.calculate(fullSalary);

    return (
      <article>
        <Header>
          <h1>Cálculo de desconto do INSS</h1>
        </Header>

        <main>
          <InputFullSalary 
            inputId="wage" 
            inputValue={fullSalary} 
            onHandleChange={this.handleWage}
            label="Salário Bruto"
            />

          <Section>
            <InputReadOnly
              inputId="basic-inss"
              inputValue={baseINSS}
              lable="Base INSS:"
            />

            <InputReadOnly
              inputId="deduction-inss"
              inputValue={discountINSS}
              lable="Desconto INSS:"
              percentage={deductionInssPerc}
              color="#e67e22"
            />

            <InputReadOnly
              inputId="basic-irpf"
              inputValue={baseIRPF}
              lable="Base IRPF:"
            />

            <InputReadOnly
              inputId="deduction-irpf"
              inputValue={discountIRPF}
              lable="Desconto IRPF:"
              percentage={deductionIrpfPerc}
              color="#c0392b"
            />

            <InputReadOnly
              inputId="net-balance"
              inputValue={netSalary}
              lable="Salário Líquido:"
              percentage={balancePercentage}
              color="#16a085"
            />
          </Section>
        </main>
        
        <Footer>
          <ProgressBarSalary color="#e67e22" bar={deductionInssPerc}/>
          <ProgressBarSalary color="#c0392b" bar={deductionIrpfPerc}/>
          <ProgressBarSalary color="#16a085" bar={balancePercentage}/>
        </Footer>
      </article>
    )
  }
}
