///<reference types="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import { data } from '../fixtures/params.json'
import { data1 } from '../fixtures/params.json'
import { data2 } from '../fixtures/params.json'
import selectors from '../support/selectors.js'


describe('Saving calculator Heat Prices calculations test', { defaultCommandTimeout: 100000 }, () => {

    const Saving_Calculator_page_URL = 'https://consumersenergymanagement.ca/savings-calculator/';
    const Current_Heating_System_field = '[name="heattype"]';
    const Current_Heating_Cost_field = '[id="CHC"]';
    const Efficiency_Level_of_Current_System_field = '[name="eheattype"]';
    const New_Heating_Cost_field = '[id="NHC"]';
    const New_Heating_System_field = '[name="heatingtype"]';
    const Efficiency_Level_of_New_System_field = '[name="eheatingtype"]';
    const Annual_Heating_Savings_label = '#step2col3 > :nth-child(1)';
    const Annual_Heating_Savings_field = '[id="AHS"]';
    const Total_Annual_Combined_Savings_Label = '[id="totalleft"]';
    const Total_Annual_Combined_Savings_field = '[id="VTAS"]';
    const Ten_Year_Extended_Savings_Label = '[id="totalright"]';
    const Ten_Year_Extended_Savings_field = '[id="VTES"]';


    beforeEach(() => {
        cy.visit(Saving_Calculator_page_URL)

    })
    it('Populate all the fields at step 1 with the test data of your choice', () => {

        cy.get(selectors.State_selector).should("be.visible").children().first().should("have.text", "Select State")
        cy.get(selectors.State_selector).select("Alberta").invoke('text').should('contain', "Alberta")
        cy.get(selectors.City_selector).should("be.visible").children().first().should("have.text", "Select City")
        cy.get(selectors.City_selector).select("Calgary").invoke('text').should('contain', "Calgary")
        cy.get(selectors.Stories_selector).should("be.visible").children().first().should("have.text", "Select Stories")
        cy.get(selectors.Stories_selector).select("2 + Basement").invoke('val').should('eq', "2+")
        cy.get(selectors.Squar_feet_selector).should("be.visible").children().first().should("have.text", "Sq Ft")
        cy.get(selectors.Squar_feet_selector).select("2000").invoke('val').should('eq', "2000")
        cy.get(selectors.House_age).should("be.visible").clear()
        cy.get(selectors.House_age).type("5").should("have.value", "5")


        data.forEach(element => {
            cy.get(selectors.Gas_Therm_label).contains("Gas / Therm:").should("be.visible")
            cy.get(selectors.Gas_Therm_field).clear().type(element.Gas_Therm_field).invoke('val').should('eq', element.Gas_Therm_field)
            cy.get(selectors.Propane_Gal_label).contains("Propane / Gal:").should("be.visible")
            cy.get(selectors.Propane_Gal_field).clear().type(element.Propane_Gal_field).invoke('val').should('eq', element.Propane_Gal_field)
            cy.get(selectors.Oil_Gal_label).contains("Oil / Gal:").should("be.visible")
            cy.get(selectors.Oil_Gal_field).clear().type(element.Oil_Gal_field).invoke('val').should('eq', element.Oil_Gal_field)
            cy.get(selectors.Summer_KWHR_label).contains("Summer / KWHR:").should("be.visible")
            cy.get(selectors.Summer_KWHR_field).clear().type(element.Summer_KWHR_field).invoke('val').should('eq', element.Summer_KWHR_field)
            cy.get(selectors.Winter_KWHR_label).contains("Winter / KWHR:").should("be.visible")
            cy.get(selectors.Winter_KWHR_field).clear().type(element.Winter_KWHR_field).invoke('val').should('eq', element.Winter_KWHR_field)
        })

    })
    it('Verify choosing each Current Heating type change price in Current Heating Cost column', () => {

        cy.get(selectors.Current_Heating_System_label).contains("Current Heating System").should("be.visible")
        cy.get(Current_Heating_System_field).should("be.visible").children().first().should("have.text", "Current Heater")
        cy.get(selectors.Current_Heating_Cost_label).contains("Current Heating Cost: ").should("be.visible")
        cy.get(Current_Heating_Cost_field).invoke("text").should("eq", "$0.00")

        cy.get(selectors.State_selector).select("Alberta").invoke('text').should('contain', "Alberta")
        cy.get(selectors.City_selector).select("Calgary").invoke('text').should('contain', "Calgary")
        cy.get(selectors.Stories_selector).select("2 + Basement").invoke('val').should('eq', "2+")
        cy.get(selectors.Squar_feet_selector).select("2000").invoke('val').should('eq', "2000")
        cy.get(selectors.House_age).clear().type("10").should("have.value", "10")
       
        data.forEach(element => {
            cy.get(selectors.Gas_Therm_field).clear().type(element.Gas_Therm_field).invoke('val').should('eq', element.Gas_Therm_field)
            cy.get(selectors.Propane_Gal_field).clear().type(element.Propane_Gal_field).invoke('val').should('eq', element.Propane_Gal_field)
            cy.get(selectors.Oil_Gal_field).clear().type(element.Oil_Gal_field).invoke('val').should('eq', element.Oil_Gal_field)
            cy.get(selectors.Summer_KWHR_field).clear().type(element.Summer_KWHR_field).invoke('val').should('eq', element.Summer_KWHR_field)
            cy.get(selectors.Winter_KWHR_field).clear().type(element.Winter_KWHR_field).invoke('val').should('eq', element.Winter_KWHR_field)
        })
        cy.get(Efficiency_Level_of_Current_System_field).invoke('val').should("eq", "55")
        cy.get(Current_Heating_Cost_field).contains("$0.00").should("be.visible")
        cy.get(Current_Heating_System_field).select("Natural Gas").invoke('val').should('eq', 'aNaturalGas')
        cy.get(Current_Heating_Cost_field).should("have.text", "$7,400.55").should("be.visible")
        cy.get(Current_Heating_System_field).select("Propane").invoke('val').should('eq', 'Propane')
        cy.get(Current_Heating_Cost_field).should("have.text", "$31,138.34").should("be.visible")
        cy.get(Current_Heating_System_field).select("Oil").invoke('val').should('eq', 'Oil')
        cy.get(Current_Heating_Cost_field).should("have.text", "$18,892.09").should("be.visible")
        cy.get(Current_Heating_System_field).select("Electric").invoke('val').should('eq', 'Electric')
        cy.get(Current_Heating_Cost_field).should("have.text", "$26,159.98").should("be.visible")
        cy.get(Current_Heating_System_field).select("Heat Pump").invoke('val').should('eq', 'HeatPump')
        cy.get(Current_Heating_Cost_field).should("have.text", "$20,321.07").should("be.visible")
    })
    it('Verify that choosing New Heating type change price in New Heating Cost column', () => {

        cy.get(selectors.New_Heating_System_label).contains("New Heating System").should("be.visible")
        cy.get(New_Heating_System_field).should("be.visible").children().first().should("have.text", "New Heater")
        cy.get(selectors.New_Heating_cost_label).contains("New Heating Cost: ").should("be.visible")
        cy.get(New_Heating_Cost_field).invoke("text").should("eq", "$0.00")

        cy.get(selectors.State_selector).select("Manitoba").invoke('text').should('contain', "Manitoba")
        cy.get(selectors.City_selector).select("Winnepeg").invoke('text').should('contain', "Winnepeg")
        cy.get(selectors.Stories_selector).select("2 + Basement").invoke('val').should('eq', "2+")
        cy.get(selectors.Squar_feet_selector).select("1750").invoke('val').should('eq', "1750")
        cy.get(selectors.House_age).clear().type("30").should("have.value", "30")

        data1.forEach(element => {
            cy.get(selectors.Gas_Therm_field).clear().type(element.Gas_Therm_field).invoke('val').should('eq', element.Gas_Therm_field)
            cy.get(selectors.Propane_Gal_field).clear().type(element.Propane_Gal_field).invoke('val').should('eq', element.Propane_Gal_field)
            cy.get(selectors.Oil_Gal_field).clear().type(element.Oil_Gal_field).invoke('val').should('eq', element.Oil_Gal_field)
            cy.get(selectors.Summer_KWHR_field).clear().type(element.Summer_KWHR_field).invoke('val').should('eq', element.Summer_KWHR_field)
            cy.get(selectors.Winter_KWHR_field).clear().type(element.Winter_KWHR_field).invoke('val').should('eq', element.Winter_KWHR_field)
        })
        cy.get(Efficiency_Level_of_New_System_field).invoke('val').should("eq", "55")
        cy.get(New_Heating_Cost_field).contains("$0.00").should("be.visible")
        cy.get(New_Heating_System_field).select("Natural Gas").invoke('val').should('eq', 'bNaturalGas')
        cy.get(New_Heating_Cost_field).should("have.text", "$9,513.64").should("be.visible")
        cy.get(New_Heating_System_field).select("Propane").invoke('val').should('eq', 'Propane')
        cy.get(New_Heating_Cost_field).should("have.text", "$38,778.41").should("be.visible")
        cy.get(New_Heating_System_field).select("Oil").invoke('val').should('eq', 'Oil')
        cy.get(New_Heating_Cost_field).should("have.text", "$13,688.69").should("be.visible")
        cy.get(New_Heating_System_field).select("Electric").invoke('val').should('eq', 'Electric')
        cy.get(New_Heating_Cost_field).should("have.text", "$134,913.57").should("be.visible")
        cy.get(New_Heating_System_field).select("Heat Pump").invoke('val').should('eq', 'HeatPump')
        cy.get(New_Heating_Cost_field).should("have.text", "$104,800.86").should("be.visible")
        cy.get(New_Heating_System_field).select("Dual Fuel-Natural Gas").invoke('val').should('eq', 'DualFuelNaturalGas')
        cy.get(New_Heating_Cost_field).should("have.text", "$29,560.90").should("be.visible")
        cy.get(New_Heating_System_field).select("Dual Fuel-Oil").invoke('val').should('eq', 'DualFuelOil')
        cy.get(New_Heating_Cost_field).should("have.text", "$32,065.93").should("be.visible")
        cy.get(New_Heating_System_field).select("Dual Fuel-Propane").invoke('val').should('eq', 'DualFuelPropane')
        cy.get(New_Heating_Cost_field).should("have.text", "$47,119.76").should("be.visible")

    })
    it('Verify that when new and old types are chosen, savings are displayed', () => {

        cy.get(selectors.Current_Heating_System_label).contains("Current Heating System").should("be.visible")
        cy.get(Current_Heating_System_field).should("be.visible").children().first().should("have.text", "Current Heater")
        cy.get(selectors.Current_Heating_Cost_label).contains("Current Heating Cost: ").should("be.visible")


        cy.get(Annual_Heating_Savings_label).contains("Annual Heating Savings: ").should("be.visible")

        cy.get(selectors.New_Heating_System_label).contains("New Heating System").should("be.visible")
        cy.get(New_Heating_System_field).should("be.visible").children().first().should("have.text", "New Heater")
        cy.get(selectors.New_Heating_cost_label).contains("New Heating Cost: ").should("be.visible")


        cy.get(selectors.State_selector).select("New Brunswick").invoke('text').should('contain', "New Brunswick")
        cy.get(selectors.City_selector).select("Fredrickton").invoke('text').should('contain', "Fredrickton")
        cy.get(selectors.Stories_selector).select("3 + Basement").invoke('val').should('eq', "3+")
        cy.get(selectors.Squar_feet_selector).select("2750").invoke('val').should('eq', "2750")
        cy.get(selectors.House_age).clear().type("45").should("have.value", "45")

        data2.forEach(element => {
            cy.get(selectors.Gas_Therm_field).clear().type(element.Gas_Therm_field).invoke('val').should('eq', element.Gas_Therm_field)

            cy.get(selectors.Propane_Gal_field).clear().type(element.Propane_Gal_field).invoke('val').should('eq', element.Propane_Gal_field)

            cy.get(selectors.Oil_Gal_field).clear().type(element.Oil_Gal_field).invoke('val').should('eq', element.Oil_Gal_field)

            cy.get(selectors.Summer_KWHR_field).clear().type(element.Summer_KWHR_field).invoke('val').should('eq', element.Summer_KWHR_field)

            cy.get(selectors.Winter_KWHR_field).clear().type(element.Winter_KWHR_field).invoke('val').should('eq', element.Winter_KWHR_field)
        })
        cy.get(Efficiency_Level_of_Current_System_field).invoke('val').should("eq", "55")
        cy.get(Efficiency_Level_of_New_System_field).invoke('val').should("eq", "55")

        cy.get(Current_Heating_Cost_field).contains("$0.00").should("be.visible")
        cy.get(New_Heating_Cost_field).contains("$0.00").should("be.visible")

        cy.get(Current_Heating_System_field).select("Natural Gas").invoke('val').should('eq', 'aNaturalGas')
        cy.get(New_Heating_System_field).select("Oil").invoke('val').should('eq', 'Oil')
        cy.get(Annual_Heating_Savings_field).should("have.text", "$38,658.12").should("be.visible")

        cy.get(Current_Heating_System_field).select("Propane").invoke('val').should('eq', 'Propane')
        cy.get(New_Heating_System_field).select("Oil").invoke('val').should('eq', 'Oil')
        cy.get(Annual_Heating_Savings_field).should("have.text", "$48,710.37").should("be.visible")

    })

    it('Verify that when new and old types are chosen, total savings are updated', () => {

        cy.get(selectors.State_selector).select("Manitoba").invoke('text').should('contain', "Manitoba")
        cy.get(selectors.City_selector).select("Winnepeg").invoke('text').should('contain', "Winnepeg")
        cy.get(selectors.Stories_selector).select("2 + Basement").invoke('val').should('eq', "2+")
        cy.get(selectors.Squar_feet_selector).select("1750").invoke('val').should('eq', "1750")
        cy.get(selectors.House_age).clear().type("30").should("have.value", "30")

        data1.forEach(element => {
            cy.get(selectors.Gas_Therm_field).clear().type(element.Gas_Therm_field).invoke('val').should('eq', element.Gas_Therm_field)

            cy.get(selectors.Propane_Gal_field).clear().type(element.Propane_Gal_field).invoke('val').should('eq', element.Propane_Gal_field)

            cy.get(selectors.Oil_Gal_field).clear().type(element.Oil_Gal_field).invoke('val').should('eq', element.Oil_Gal_field)

            cy.get(selectors.Summer_KWHR_field).clear().type(element.Summer_KWHR_field).invoke('val').should('eq', element.Summer_KWHR_field)

            cy.get(selectors.Winter_KWHR_field).clear().type(element.Winter_KWHR_field).invoke('val').should('eq', element.Winter_KWHR_field)

        })

        cy.get(selectors.Current_Heating_System_label).contains("Current Heating System").should("be.visible")
        cy.get(Current_Heating_System_field).should("be.visible").children().first().should("have.text", "Current Heater")
        cy.get(selectors.Current_Heating_Cost_label).contains("Current Heating Cost: ").should("be.visible")

        cy.get(selectors.New_Heating_System_label).contains("New Heating System").should("be.visible")
        cy.get(New_Heating_System_field).should("be.visible").children().first().should("have.text", "New Heater")
        cy.get(selectors.New_Heating_cost_label).contains("New Heating Cost: ").should("be.visible")

        cy.get(Total_Annual_Combined_Savings_Label).contains("Total Annual Combined Savings").should("be.visible")
        cy.get(Ten_Year_Extended_Savings_Label).contains("10 Year Extended Savings").should("be.visible")

        cy.get(Efficiency_Level_of_Current_System_field).invoke('val').should("eq", "55")
        cy.get(Efficiency_Level_of_New_System_field).invoke('val').should("eq", "55")

        cy.get(Current_Heating_Cost_field).contains("$0.00").should("be.visible")
        cy.get(New_Heating_Cost_field).contains("$0.00").should("be.visible")

        cy.get(Current_Heating_System_field).select("Natural Gas").invoke('val').should('eq', 'aNaturalGas')
        cy.get(New_Heating_System_field).select("Oil").invoke('val').should('eq', 'Oil')
        cy.get(Total_Annual_Combined_Savings_field).should("have.text", "-$4,175.05").should("be.visible")
        cy.get(Ten_Year_Extended_Savings_field).should("have.text", "-$41,750.49").should("be.visible")



        cy.get(Current_Heating_System_field).select("Propane").invoke('val').should('eq', 'Propane')
        cy.get(New_Heating_System_field).select("Oil").invoke('val').should('eq', 'Oil')
        cy.get(Total_Annual_Combined_Savings_field).should("have.text", "$25,089.72").should("be.visible")
        cy.get(Ten_Year_Extended_Savings_field).should("have.text", "$250,897.24").should("be.visible")




    })


})

