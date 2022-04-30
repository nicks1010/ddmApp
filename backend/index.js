import chalk from 'chalk'
import inquirer from 'inquirer'
import fs from 'fs'
import { setDefaultResultOrder } from 'dns'

function operation (){
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            massage: 'Qual operação deseja exercutar?',
            choices:[
                'criar conta.',
                'consultar saldo.',
                'depositar.',
                'sacar.',
                'sair'
            ]
        }
    ]).then((answer)=>{
        const action = answer['action']

        if(action === 'criar conta.'){
            console.log('criar')
        }else if(action === 'consultar saldo.'){
            console.log('consulta')
        }else if(action === 'depositar.'){
            console.log('deposito')
        }else if(action === 'sacar.'){
            console.log('sacar')
        }else if(action === 'sair'){
            console.log(chalk.bgBlue.black('obrigado saindo do sistema...'))
            process.exit()
        }
    })
}