import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import NavigationService from '../../routing/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';

export default class test5 extends Component {
    goToPage = (pageName) => {
        NavigationService.navigate(pageName)
    }

    render() {
        return (
            <View style={{ flex: 1, width: "100%", padding: 20, }}>
                <Text style={{ paddingBottom: 20, fontSize: 30 }}>Accept Contract</Text>
                <View style={{ borderColor: 'black', borderWidth: 2, flex: 1, padding: 20, marginBottom: 40 }}>
                    <ScrollView>
                        <Text>
                            GENERAL CONDITIONS OF CONTRACT
                            </Text>
                        <Text>
                            1           DEFINITIONS
                            </Text>
                        <Text>
                            In these conditions, except wher
                            e the context otherwise requires:
                            Contract:
                              the  Contract  signed  by  the  Parties  an
                            d  of  which  these  General  Conditions  of
                            Contract form part;
                            Contract  Data
                            :  specific  data,  which  together  with
                            these  General  Conditions  of  Contract,
                            collectively  describe  the  risks,
                              liabilities  and  obligations  of
                            the  contracting  Parties  and  the
                            procedures for the administration of the contract.
                            Firm price:
                             the price that is only subject to adjustments
                             in accordance with the actual increase
                            or decrease resulting from the change, impositio
                            n, or abolition of customs or excise duty and
                            any other duty, levy, or tax which, in terms of a law or regulation is binding on the Supplier and
                            demonstrably  has  an  influence  on
                              the  price  of  any  supplies,  or
                              the  rendering  costs  of  any
                            service, for the execution of the contract;
                            Goods
                            : the articles and things described and to be supplied and provided under the Contract.
                            Parties:
                            the Purchaser and the Supplier.
                            Pricing Data:
                             data that establishes the criteria and as
                            sumptions that were taken into account
                            when  developing  the  Contract  Price  and  the  re
                            cord  of  the  components  that  make  up  of  the
                            Contract Price;
                            Purchaser
                            :  the  contracting  party  named  in  the  Cont
                            ract  Data  who  purchases  supplies  from
                            the Supplier;
                            Scope of work:
                            the
                            specification and description of the Goods which are to be provided and
                            any other requirements and constraints relating to
                            the manner in which the Contract work is to
                            be performed
                            Supplier:
                             the contracting party named in the Contra
                            ct Data who is engaged by the Purchaser
                            to provide the Goods described in the Contract.

                            </Text>
                        <Text>
                            2.          INTERPRETATION
                            </Text>
                        <Text>
                            2.1
                            Unless inconsistent with the context, an expression which denotes :
                            a)
                            any gender includes the other genders;
                            b)
                            a natural person includes a juristic person and vice versa;
                            c)
                            the singular includes the plural and vice versa.
                            </Text>
                        <Text>
                            2.2
                            If there is any conflict between the provisions
                            of these General Conditions of Contract and the
                            Contract Data, the provisions of
                            the Contract Data shall prevail.
                            </Text>
                        <Text>
                            2.3
                            The clause headings shall not limit, alter or affect the meaning of the Contract.
                            </Text>

                        <Text>
                            3.          GENERAL
                            </Text>
                        <Text>
                            3.1        Governing        law
                            Law governing the Contract shall be the
                            law of the Republic of South Africa.
                            </Text>
                        <Text>
                            3.2        Language
                            The language of the Contract and of all communi
                            cations between the Parties shall be English.
                            August , 2008: Edition 3 of CIDB document 1019
                            Page 2
                            Contract for the supply and delivery of goods
                            </Text>
                        <Text>
                            3.3        Notices
                            </Text>
                        <Text>
                            3.3.1    Any notice, request, consent, or other co
                            mmunication made between the Parties pursuant to
                            the  Contract  shall  be  in  writing  and  shall  be  deemed  to  have  been  made  when  delivered  in
                            person to an authorized representative of the Pa
                            rty to whom the communication is addressed,
                            or when sent by telex, telegram, e-mail or facsi
                            mile to such Party at the address specified in
                            the Contract, or one week after hav
                            ing been sent by registered post.
                            </Text>
                        <Text>
                            3.3.2     If   the   sender   requires   evidence   of   rece
                            ipt,   he   shall   state   such   requirement   in   his
                            communication and, wherever there is deadline fo
                            r the receipt of the communication, he may
                            demand evidence of receipt of his communication.
                             In any event, the sender shall take all the
                            necessary measures to ensure receipt of communications.
                            </Text>
                        <Text>
                            3.3.3     A  Party  may  change  its  address  for  receipt
                            of  communications  by  giving  the  other  Party  30
                            days advance notice of such ch
                    </Text>
                    </ScrollView>
                </View>
                <Button title="Accept" onPress={() => { this.goToPage("test5_2") }} color='#9c0000' />
            </View>
        )
    }
}