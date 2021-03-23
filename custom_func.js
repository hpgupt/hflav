google.charts.load("current", {
    packages: ['corechart']
});
// dictionary to map categories to their meaning/full-forms
var dict = {
    'Bd/D': 'B0 decays to single charm mesons',
    'Bd/DD': 'B0 decays to two charm mesons',
    'Bd/cc': 'B0 decays to charmonium',
    'Bd/baryon': 'B0 decays to charm baryons',
    'Bd/other': 'B0 decays to charm like states',
    'Bu/D': 'B- decays to single charm mesons',
    'Bu/DD': 'B- decays to two charm mesons',
    'Bu/cc': 'B- decays to charmonium',
    'Bu/baryon': 'B- decays to charm baryons',
    'Bu/other': 'B- decays to charm like states',
    'B/DD': 'B0/- decays to two charm meson',
    'B/cc': 'B0/- decays to charmonium',
    'B/other': 'B0/- decays to charm like states',
    'Bs/D': 'Bs decays to single charm mesons',
    'Bs/DD': 'Bs decays to two charm mesons',
    'Bs/cc': 'Bs decays to charmonium',
    'Bs/baryon': 'Bs decays to charm baryons',
    'Bc/D': 'Bc decays to single charm mesons',
    'Bc/DD': 'Bc decays to two open charm mesons',
    'Bc/cc': 'Bc decays to charmonium',
    'Bc/B': 'Bc decays to beauty mesons',
    'Bbaryon/D': 'B baryon decays to a single open charm meson',
    'Bbaryon/cc': 'B baryon decays to charmonium',
    'Bbaryon/baryon': 'B baryon decays to charm baryons',
    'Bbaryon/other': 'B baryon decays to a final states involving exotic particles'
}
$(document).ready(function () {

    // Json data of gsoc_hflav file is copied here as its not possible to fetch data from a external file without running a web server.
    // This is a long file , further functions that help the app to function start at Line 8506
    var jsonData = [
        {
            "name": "BR_Lambdab0_K-_D0_p.-BR_Lambdab0_pi-_D0_p",
            "latex": "$ \\frac{{\\cal{B}} ( \\Lambda_b^{0} \\to D^{0} p K^{-} ) }{ {\\cal{B}} ( \\Lambda_b^{0} \\to D^{0} p \\pi^{-} )} $",
            "category": "Bbaryon/D",
            "average": 0.07840881240362992,
            "error": 0.008607155901120699,
            "measurements": [
                {
                    "value": 0.073,
                    "error": 0.011169491020860955
                },
                {
                    "value": 0.112,
                    "error": 0.025998451891820918
                }
            ]
        },
        {
            "name": "BR_Lambdab0_D0_p_pi.BR_D0_K_pi.-BR_Lambdab0_Lambdac_pi.BR_Lambdac_p_K_pi",
            "latex": "$ \\frac{ {\\cal{B}} ( \\Lambda_b^{0} \\to D^{0} p \\pi^{-})  \\times {\\cal{B}} ( D^{0} \\to K^{+} \\pi^{-} )} {  {\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c^{+} \\pi^{-} )   \\times   {\\cal{B}}  (\\Lambda_c^{+} \\to  p K^{-} \\pi^{+}) } $",
            "category": "Bbaryon/D",
            "average": 0.0806,
            "error": 0.004188078318274384,
            "measurements": [
                {
                    "value": 0.0806,
                    "error": 0.0054580216195980755
                }
            ]
        },
        {
            "name": "f_Xib0.BR_Xib0_D0_p_K-f_Lambdab0.BR_Lambdab0_D0_p_K",
            "latex": "$ \\frac{ f_{\\Xi_b^{0}} \\times{\\cal{B}} ( \\Xi_b^{0} \\to D^{0} p K^{-} )   } { f_{\\Lambda_b^{0}} \\times{\\cal{B}} ( \\Lambda_b^{0} \\to D^{0} p K^{-})  } $",
            "category": "Bbaryon/D",
            "average": 0.44000000000000006,
            "error": 0.10816653826370884,
            "measurements": [
                {
                    "value": 0.44,
                    "error": 0.1236931687685298
                }
            ]
        },
        {
            "name": "BR_Lambdab0_p_K-_chic2.-BR_Lambdab0_p_K-_chic1",
            "latex": "$ \\frac{ {\\cal{B}}( \\Lambda_b^0 \\to \\chi_{c2} p K^- ) }{ {\\cal{B}}( \\Lambda_b^0 \\to \\chi_{c1} p K^- ) } $",
            "category": "Bbaryon/cc",
            "average": 1.02,
            "error": 0.11419055689206256,
            "measurements": [
                {
                    "value": 1.02,
                    "error": 0.11532562594670798
                }
            ]
        },
        {
            "name": "BR_Lambdab0_p_K-_Jpsi",
            "latex": "$ {\\cal{B}} ( \\Lambda_b^{0} \\to J/\\psi p K^{-} ) $",
            "category": "Bbaryon/cc",
            "average": 0.0031709338399558886,
            "error": 0.00037417283861918883,
            "measurements": [
                {
                    "value": 0.00317,
                    "error": 0.0005288572943196896
                }
            ]
        },
        {
            "name": "BR_Lambdab0_psi2S_Lambda0.-BR_Lambdab0_Jpsi_Lambda0",
            "latex": "$ \\frac{{\\cal{B}} ( \\Lambda_b^{0} \\to \\psi(2S) \\Lambda )}{{\\cal{B}} ( \\Lambda_b^{0} \\to J/\\psi \\Lambda )} $",
            "category": "Bbaryon/cc",
            "average": 0.611687170296534,
            "error": 0.037933438132664914,
            "measurements": [
                {
                    "value": 5.13,
                    "error": 0.34088121098118623
                },
                {
                    "value": 0.501,
                    "error": 0.04255584566190643
                }
            ]
        },
        {
            "name": "f_b_Lambdab0.BR_Lambdab0_Jpsi_Lambda0",
            "latex": "$ {f_{\\Lambda_b} \\times \\cal{B}} ( \\Lambda_b^{0} \\to J/\\psi \\Lambda ) $",
            "category": "Bbaryon/cc",
            "average": 0.000601,
            "error": 8.802272433866154e-05,
            "measurements": [
                {
                    "value": 0.000601,
                    "error": 0.00010906878563548782
                }
            ]
        },
        {
            "name": "sigma_Omegab-.BR_Omegab-_Jpsi_Omega-.-sigma_Lambdab0.-BR_Lambdab0_Jpsi_Lambda0",
            "latex": "$ \\frac{f_{\\Omega_b^{-}} \\times {\\cal{B}} ( \\Omega_b^{-} \\to J/\\psi \\Omega^{-} ) }{ f_{\\Lambda_b^{0}}  \\times   {\\cal{B}} ( \\Lambda_b^{0} \\to J/\\psi \\Lambda )} $",
            "category": "Bbaryon/cc",
            "average": 0.045,
            "error": 0.015054881378903566,
            "measurements": [
                {
                    "value": 0.045,
                    "error": 0.015591486014295261
                }
            ]
        },
        {
            "name": "BR_Lambdab0_Jpsi_pi+_pi-_p_K-.-BR_Lambdab0_Jpsi_p_K-",
            "latex": "$ \\frac{{\\cal{B}} ( \\Lambda_b^{0} \\to J/\\psi \\pi^{+} \\pi^{-} p K^{-} )}{{\\cal{B}} ( \\Lambda_b^{0} \\to J/\\psi p K^{-} )} $",
            "category": "Bbaryon/cc",
            "average": 2.086,
            "error": 0.16483931569787766,
            "measurements": [
                {
                    "value": 2.086,
                    "error": 0.2124335190124195
                }
            ]
        },
        {
            "name": "alphab_Lambdab0_Jpsi_Lambda0",
            "latex": "$ \\alpha_b ( \\Lambda_b^{0} \\to J/\\psi \\Lambda ) $",
            "category": "Bbaryon/cc",
            "average": 0.08330875166314161,
            "error": 0.1209779752585205,
            "measurements": [
                {
                    "value": 0.5,
                    "error": 1.9672315572906003
                },
                {
                    "value": -0.14,
                    "error": 0.198997487421324
                },
                {
                    "value": 0.3,
                    "error": 0.18110770276274835
                }
            ]
        },
        {
            "name": "BR_Lambdab0_Jpsi_p_pi-.-BR_Lambdab0_Jpsi_p_K-",
            "latex": "$ \\frac{{\\cal{B}} ( \\Lambda_b^{0} \\to J/\\psi p \\pi^{-} )}{{\\cal{B}} ( \\Lambda_b^{0} \\to J/\\psi p K^{-} )} $",
            "category": "Bbaryon/cc",
            "average": 0.0824,
            "error": 0.004887739763939976,
            "measurements": [
                {
                    "value": 0.0824,
                    "error": 0.006444377394287208
                }
            ]
        },
        {
            "name": "BR_Lambdab0_Lambda0_Jpsi",
            "latex": "$ {\\cal{B}} ( \\Lambda_b^{0} \\to J/\\psi \\Lambda ) $",
            "category": "Bbaryon/cc",
            "average": 0.0047,
            "error": 0.0028319604517012603,
            "measurements": [
                {
                    "value": 0.0047,
                    "error": 0.003410278580995987
                }
            ]
        },
        {
            "name": "BR_Lambdab0_p_K-_chic2.-BR_Lambdab0_p_K-_Jpsi",
            "latex": "$ \\frac{ {\\cal{B}}( \\Lambda_b^0 \\to \\chi_{c2} p K^- ) }{ {\\cal{B}}( \\Lambda_b^0 \\to J/\\psi p K^- ) } $",
            "category": "Bbaryon/cc",
            "average": 0.24799999999999997,
            "error": 0.025224276680670867,
            "measurements": [
                {
                    "value": 0.248,
                    "error": 0.029546573405388316
                }
            ]
        },
        {
            "name": "BR_Lambdab0_psi2S_p_K-.-BR_Lambdab0_Jpsi_p_K-",
            "latex": "$ \\frac{{\\cal{B}} ( \\Lambda_b^{0} \\to \\psi(2S)  p K^{-} )}{{\\cal{B}} ( \\Lambda_b^{0} \\to J/\\psi p K^{-} )} $",
            "category": "Bbaryon/cc",
            "average": 1.908264232653392,
            "error": 0.10341446344882683,
            "measurements": [
                {
                    "value": 2.07,
                    "error": 0.10666302077102449
                }
            ]
        },
        {
            "name": "sigma_Xib-.BR_Xib-_Jpsi_Xi-.-sigma_Lambdab0.-BR_Lambdab0_Jpsi_Lambda0",
            "latex": "$ \\frac{f_{\\Xi_b^{-}} \\times {\\cal{B}} ( \\Xi_b^{-} \\to J/\\psi \\Xi^{-} ) }{ f_{\\Lambda_b^{0}} \\times {\\cal{B}} ( \\Lambda_b^{0} \\to J/\\psi \\Lambda )} $",
            "category": "Bbaryon/cc",
            "average": 0.167,
            "error": 0.03330879170396677,
            "measurements": [
                {
                    "value": 0.167,
                    "error": 0.03546107736678575
                }
            ]
        },
        {
            "name": "BR_Lambdab0_p_K-_chic1.-BR_Lambdab0_p_K-_Jpsi",
            "latex": "$ \\frac{ {\\cal{B}}( \\Lambda_b^0 \\to \\chi_{c1} p K^- ) }{ {\\cal{B}}( \\Lambda_b^0 \\to J/\\psi p K^- ) } $",
            "category": "Bbaryon/cc",
            "average": 0.242,
            "error": 0.019229510854396552,
            "measurements": [
                {
                    "value": 0.242,
                    "error": 0.02479919353527449
                }
            ]
        },
        {
            "name": "transv_polarb_Lambdab0_Jpsi_Lambda0",
            "latex": "$ {\\cal{P}}_b ( \\Lambda_b^{0} \\to J/\\psi \\Lambda ) $",
            "category": "Bbaryon/cc",
            "average": 0.008041697795487801,
            "error": 0.08428226162622461,
            "measurements": [
                {
                    "value": 0.6000000000000001,
                    "error": 0.7549834435270751
                },
                {
                    "value": 0.0,
                    "error": 0.10392304845413264
                }
            ]
        },
        {
            "name": "BR_Lambdab0_SigmacS02520_p_p-.BR_SigmacS02520_Lambdac+_pi-.-BR_Lambdab0_Lambdac+_p_p-_pi-",
            "latex": "$ \\frac { {\\cal{B}} ( \\Lambda_b^{0} \\to \\Sigma_c(2520)^{*0} p \\bar{p} ) \\times {\\cal{B}} ( \\Sigma_c(2520)^{*0} \\to \\Lambda_c^{+} \\pi^{-} )  }{ {\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c^{+} p \\bar{p} \\pi^{-} ) } $",
            "category": "Bbaryon/baryon",
            "average": 1.19,
            "error": 0.2441311123222267,
            "measurements": [
                {
                    "value": 1.19,
                    "error": 0.2814249455894058
                }
            ]
        },
        {
            "name": "BR_Lambdab0_pi-_pi-_pi+_Lambdac+",
            "latex": "$ {\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c^{+} \\pi^{+} \\pi^{-} \\pi^{-} ) $",
            "category": "Bbaryon/baryon",
            "average": 0.268,
            "error": 0.11555358447268929,
            "measurements": [
                {
                    "value": 0.268,
                    "error": 0.16088470580151676
                }
            ]
        },
        {
            "name": "BR_Lambdab0_pi-_Lambdac+2940.BR_Lambdac+2940_D0_p.-BR_Lambdab0_pi-_Lambdac+2880.BR_Lambdac+2880_D0_p",
            "latex": "$ \\frac{{\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c(2940)^{+} \\pi^{-} ) \\times {\\cal{B}} ( \\Lambda_c(2940)^{+} \\to D^0 p ) }{{\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c(2880)^{+} \\pi^{-} ) \\times {\\cal{B}} ( \\Lambda_c(2880)^{+} \\to D^0 p ) } $",
            "category": "Bbaryon/baryon",
            "average": 8.350836872916249,
            "error": 2.8404940196406283,
            "measurements": [
                {
                    "value": 8.3,
                    "error": 2.8915114239489785
                }
            ]
        },
        {
            "name": "BR_Lambdab0_pi-_Lambdac+2860.BR_Lambdac+2860_D0_p.-BR_Lambdab0_pi-_Lambdac+2880.BR_Lambdac+2880_D0_p",
            "latex": "$ \\frac{{\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c(2860)^{+} \\pi^{-} ) \\times {\\cal{B}} ( \\Lambda_c(2860)^{+} \\to D^0 p ) }{{\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c(2880)^{+} \\pi^{-} ) \\times {\\cal{B}} ( \\Lambda_c(2880)^{+} \\to D^0 p ) } $",
            "category": "Bbaryon/baryon",
            "average": 4.513040595116205,
            "error": 0.859383701731316,
            "measurements": [
                {
                    "value": 4.51,
                    "error": 0.5108884136010838
                }
            ]
        },
        {
            "name": "BR_Lambdab0_pi-_Lambdac+2625.-BR_Lambdab0_pi-_pi-_pi+_Lambdac+.BR_Lambdac+2625_pi-_pi+_Lambdac+",
            "latex": "$ \\frac{{\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c(2625)^{+} \\pi^{-} ) \\times {\\cal{B}} ( \\Lambda_c(2625)^{+} \\to \\Lambda_c^{+} \\pi^{+} \\pi^{-} ) }{ {\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c^{+} \\pi^{+} \\pi^{-} \\pi^{-} )} $",
            "category": "Bbaryon/baryon",
            "average": 0.43,
            "error": 0.1552417469629544,
            "measurements": [
                {
                    "value": 0.43,
                    "error": 0.160312195418814
                }
            ]
        },
        {
            "name": "BR_Lambdab0_Lambdac+_K-.BR_Lambdab0_Lambdac+_pi-",
            "latex": "$ \\frac{ {\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c^{+} K^{-} )  }{ {\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c^{+} \\pi^{-} )  } $",
            "category": "Bbaryon/baryon",
            "average": 0.0731,
            "error": 0.002262741699796952,
            "measurements": [
                {
                    "value": 0.0731,
                    "error": 0.0027712812921102037
                }
            ]
        },
        {
            "name": "BR_Xib_Lambdab0_pi-",
            "latex": "$ \\frac{f_{\\Xi_b^{-}}}{f_{\\Lambda_b^{0}}} \\times {\\cal{B}} ( \\Xi_b^{-} \\to \\Lambda_b^{0}\\pi^{-}) $",
            "category": "Bbaryon/baryon",
            "average": 0.0057,
            "error": 0.0019907731678422726,
            "measurements": [
                {
                    "value": 0.0057,
                    "error": 0.0021652849655258953
                }
            ]
        },
        {
            "name": "BR_Lambdab0_Sigmac02455_p_p-.BR_Sigmac02455_Lambdac+_pi-.-BR_Lambdab0_Lambdac+_p_p-_pi-",
            "latex": "$ \\frac{ {\\cal{B}} ( \\Lambda_b^{0} \\to \\Sigma_c(2455)^{0} p \\bar{p} ) \\times {\\cal{B}} ( \\Sigma_c(2455)^0 \\to \\Lambda_c^{+} \\pi^{-} )  }{ {\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c^{+} p \\bar{p} \\pi^{-} ) } $",
            "category": "Bbaryon/baryon",
            "average": 0.89,
            "error": 0.16155494421388733,
            "measurements": [
                {
                    "value": 0.89,
                    "error": 0.17233687939614087
                }
            ]
        },
        {
            "name": "BR_Lambdab0_Lambdac+_pi-.-BR_B0bar_pi-_D+",
            "latex": "$ \\frac{{\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c^{+} \\pi^{-} )}{{\\cal{B}} ( \\bar{B}^{0} \\to D^{+} \\pi^{-} )} $",
            "category": "Bbaryon/baryon",
            "average": 3.3143729184144393,
            "error": 7.89560362149315,
            "measurements": [
                {
                    "value": 3.3,
                    "error": 1.2727922061357855
                }
            ]
        },
        {
            "name": "BR_Lambdab0_pi-_pi+_Sigmac0.-BR_Lambdab0_pi-_pi-_pi+_Lambdac+.BR_Sigmac0_pi-_Lambdac+",
            "latex": "$ \\frac{{\\cal{B}} ( \\Lambda_b^{0} \\to \\Sigma_c^{0} \\pi^{+} \\pi^{-} ) \\times {\\cal{B}} ( \\Sigma_c^{0} \\to \\Lambda_c^{+} \\pi^{-} ) }{ {\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c^{+} \\pi^{+} \\pi^{-} \\pi^{-} )} $",
            "category": "Bbaryon/baryon",
            "average": 0.7400000000000001,
            "error": 0.2683281572621768,
            "measurements": [
                {
                    "value": 0.7400000000000001,
                    "error": 0.29393876913398137
                }
            ]
        },
        {
            "name": "BR_Lambdab0_pi-_pi-_pi+_Lambdac+.-BR_Lambdab0_pi-_Lambdac+",
            "latex": "$ \\frac{{\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c^{+} \\pi^{+} \\pi^{-} \\pi^{-} ) }{ {\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c^{+} \\pi^{-} )} $",
            "category": "Bbaryon/baryon",
            "average": 1.5807359217767072,
            "error": 0.19626665337673566,
            "measurements": [
                {
                    "value": 1.43,
                    "error": 0.24372115213907883
                },
                {
                    "value": 3.04,
                    "error": 0.9442148728616212
                }
            ]
        },
        {
            "name": "BR_Lambdab0_Lambdac+_D-.BR_Lambdab0_Lambdac+_Ds-",
            "latex": "$ \\frac{ {\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c^{+} D^{-} )  }{ {\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c^{+} D_s^{-} )  } $",
            "category": "Bbaryon/baryon",
            "average": 0.042,
            "error": 0.004242640687119285,
            "measurements": [
                {
                    "value": 0.042,
                    "error": 0.005196152422706632
                }
            ]
        },
        {
            "name": "BR_Lambdab0_pi-_pi-_Sigmac++.-BR_Lambdab0_pi-_pi-_pi+_Lambdac+.BR_Sigmac++_pi-_Lambdac+",
            "latex": "$ \\frac{{\\cal{B}} ( \\Lambda_b^{0} \\to \\Sigma_c^{++} \\pi^{-} \\pi^{-} ) \\times {\\cal{B}} ( \\Sigma_c^{++} \\to \\Lambda_c^{+} \\pi^{+} ) }{ {\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c^{+} \\pi^{+} \\pi^{-} \\pi^{-} )} $",
            "category": "Bbaryon/baryon",
            "average": 0.42,
            "error": 0.1931320791624941,
            "measurements": [
                {
                    "value": 0.42000000000000004,
                    "error": 0.2054263858417414
                }
            ]
        },
        {
            "name": "BR_Lambdab0_Lambdac+_p_p-_pi-.BR_Lambdab0_Lambdac+_pi-",
            "latex": "$ \\frac{ {\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c^{+} p \\bar{p} \\pi^{-} )  }{ {\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c^{+} \\pi^{-} )  } $",
            "category": "Bbaryon/baryon",
            "average": 0.54,
            "error": 0.0394081209904755,
            "measurements": [
                {
                    "value": 0.54,
                    "error": 0.05076416058598822
                }
            ]
        },
        {
            "name": "BR_Lambdab0_Lambdac+_pi-",
            "latex": "$ {\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c^{+} \\pi^{-} ) $",
            "category": "Bbaryon/baryon",
            "average": 0.04259616291564476,
            "error": 0.0011904332976906994,
            "measurements": [
                {
                    "value": 0.043,
                    "error": 0.0030819811308120558
                }
            ]
        },
        {
            "name": "BR_Lambdab0_pi-_Lambdac+2595.-BR_Lambdab0_pi-_pi-_pi+_Lambdac+.BR_Lambdac+2595_pi-_pi+_Lambdac+",
            "latex": "$ \\frac{{\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c(2595)^{+} \\pi^{-} ) \\times {\\cal{B}} ( \\Lambda_c(2595)^{+} \\to \\Lambda_c^{+} \\pi^{+} \\pi^{-} ) }{ {\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c^{+} \\pi^{+} \\pi^{-} \\pi^{-} )} $",
            "category": "Bbaryon/baryon",
            "average": 0.44000000000000006,
            "error": 0.17743756630345237,
            "measurements": [
                {
                    "value": 0.44000000000000006,
                    "error": 0.1845823643358446
                }
            ]
        },
        {
            "name": "BR_Xib0_D0_p_pi.BR_D0_K_pi.-BR_Xib0_Lambdac_pi.BR_Lambdac_p_K_pi",
            "latex": "$ \\frac{ {\\cal{B}} ( \\Xi_b^{0} \\to \\Lambda_c^{+} K^{-} )   \\times   {\\cal{B}}  (\\Lambda_c^{+} \\to  p K^{-} \\pi^{+}) } { {\\cal{B}} ( \\Xi_b^{0} \\to D^{0} p K^{-})  \\times {\\cal{B}} ( D^{0} \\to K^{+} \\pi^{-} ) } $",
            "category": "Bbaryon/baryon",
            "average": 0.57,
            "error": 0.304138126510236,
            "measurements": [
                {
                    "value": 0.57,
                    "error": 0.3695943722515265
                }
            ]
        },
        {
            "name": "BR_Lambdab0_pi-_Pc4450+.-BR_Lambdab0_K-_Pc4450+",
            "latex": "$ \\frac{ {\\cal{B}} ( \\Lambda_b^0 \\to \\pi^- P_c(4450)^+ ) }{ {\\cal{B}} ( \\Lambda_b^0 \\to K^- P_c(4450)^+ ) } $",
            "category": "Bbaryon/other",
            "average": 0.2728872562336826,
            "error": 0.15338755357394823,
            "measurements": [
                {
                    "value": 0.33,
                    "error": 0.22951374249436746
                }
            ]
        },
        {
            "name": "BR_Lambdab0_pi-_Pc4450+.-BR_Lambdab0_K-_Jpsi_p+",
            "latex": "$ \\frac{ {\\cal{B}} ( \\Lambda_b^0 \\to \\pi^- P_c(4450)^+ ) }{ {\\cal{B}} ( \\Lambda_b^0 \\to K^- J/\\psi p ) } $",
            "category": "Bbaryon/other",
            "average": 0.16000000000000003,
            "error": 0.08904801723926309,
            "measurements": [
                {
                    "value": 0.16000000000000003,
                    "error": 0.10467761142593153
                }
            ]
        },
        {
            "name": "BR_Lambdab0_pi-_Pc4380+.-BR_Lambdab0_K-_Pc4380+",
            "latex": "$ \\frac{ {\\cal{B}} ( \\Lambda_b^0 \\to \\pi^- P_c(4380)^+ ) }{ {\\cal{B}} ( \\Lambda_b^0 \\to K^- P_c(4380)^+ ) } $",
            "category": "Bbaryon/other",
            "average": 0.31761354262890457,
            "error": 0.1773397107140678,
            "measurements": [
                {
                    "value": 0.5,
                    "error": 0.42288772307942846
                }
            ]
        },
        {
            "name": "BR_Lambdab0_p_Zc4200-.-BR_Lambdab0_K-_Jpsi_p+",
            "latex": "$ \\frac{ {\\cal{B}} ( \\Lambda_b^0 \\to p Z_c(4200)^- ) }{ {\\cal{B}} ( \\Lambda_b^0 \\to K^- J/\\psi p ) } $",
            "category": "Bbaryon/other",
            "average": 0.77,
            "error": 0.464371549364077,
            "measurements": [
                {
                    "value": 0.77,
                    "error": 0.5938032316260611
                }
            ]
        },
        {
            "name": "BR_Lambdab0_pi-_Pc4380+.-BR_Lambdab0_K-_Jpsi_p+",
            "latex": "$ \\frac{ {\\cal{B}} ( \\Lambda_b^0 \\to \\pi^- P_c(4380)^+ ) }{ {\\cal{B}} ( \\Lambda_b^0 \\to K^- J/\\psi p ) } $",
            "category": "Bbaryon/other",
            "average": 0.51,
            "error": 0.2597203424062069,
            "measurements": [
                {
                    "value": 0.51,
                    "error": 0.3342960161216301
                }
            ]
        },
        {
            "name": "Deltaperp_B_KS_Jpsi",
            "latex": "$ \\delta_{\\perp} ( B \\to J/\\psi K^{*} ) $",
            "category": "B/cc",
            "average": 2.934782335129184,
            "error": 0.023686045405516158,
            "measurements": [
                {
                    "value": 2.94,
                    "error": 0.034641016151377546
                },
                {
                    "value": 2.938,
                    "error": 0.06554387843269577
                },
                {
                    "value": 2.91,
                    "error": 0.06557438524302
                }
            ]
        },
        {
            "name": "Azero_B_KS_Jpsi",
            "latex": "$ \\vert{\\cal{A}}_{0}\\vert^{2} ( B \\to J/\\psi K^{*} ) $",
            "category": "B/cc",
            "average": 0.5640246305418719,
            "error": 0.010015382257908571,
            "measurements": [
                {
                    "value": 0.574,
                    "error": 0.017492855684535902
                },
                {
                    "value": 0.556,
                    "error": 0.01676305461424021
                }
            ]
        },
        {
            "name": "Aperp_B_KS_chi1c",
            "latex": "$ \\vert{\\cal{A}}_{\\perp}\\vert^{2} ( B \\to \\chi_{c1} K^{*} ) $",
            "category": "B/cc",
            "average": 0.03,
            "error": 0.044721359549996474,
            "measurements": [
                {
                    "value": 0.03,
                    "error": 0.048989794855663564
                }
            ]
        },
        {
            "name": "Deltapara_B_KS_psi2S",
            "latex": "$ \\delta_{\\parallel} ( B \\to \\psi(2S) K^{*} ) $",
            "category": "B/cc",
            "average": -2.8,
            "error": 0.41231056257945714,
            "measurements": [
                {
                    "value": -2.8,
                    "error": 0.4242640687119286
                }
            ]
        },
        {
            "name": "Aperp_B_KS_psi2S",
            "latex": "$ \\vert{\\cal{A}}_{\\perp}\\vert^{2} ( B \\to \\psi(2S) K^{*} ) $",
            "category": "B/cc",
            "average": 0.3,
            "error": 0.06324555320337433,
            "measurements": [
                {
                    "value": 0.3,
                    "error": 0.066332495807108
                }
            ]
        },
        {
            "name": "Deltaperp_B_KS_psi2S",
            "latex": "$ \\delta_{\\perp} ( B \\to \\psi(2S) K^{*} ) $",
            "category": "B/cc",
            "average": 2.7999999999999994,
            "error": 0.3162277659178276,
            "measurements": [
                {
                    "value": 2.8,
                    "error": 0.33166247903554
                }
            ]
        },
        {
            "name": "Apara_B_KS_Jpsi",
            "latex": "$ \\vert{\\cal{A}}_{\\parallel}\\vert^{2} ( B \\to J/\\psi K^{*} ) $",
            "category": "B/cc",
            "average": 0.2219426116473958,
            "error": 0.007168522590754984,
            "measurements": [
                {
                    "value": 0.227,
                    "error": 0.01606237840420901
                },
                {
                    "value": 0.231,
                    "error": 0.01649242250247064
                },
                {
                    "value": 0.211,
                    "error": 0.013114877048604002
                }
            ]
        },
        {
            "name": "Deltapara_B_KS_Jpsi",
            "latex": "$ \\delta_{\\parallel} ( B \\to J/\\psi K^{*} ) $",
            "category": "B/cc",
            "average": -2.9323853984700166,
            "error": 0.03136168374182494,
            "measurements": [
                {
                    "value": -2.94,
                    "error": 0.04690415759823429
                },
                {
                    "value": -2.887,
                    "error": 0.09070832376358853
                },
                {
                    "value": -2.93,
                    "error": 0.09797958971132713
                }
            ]
        },
        {
            "name": "Apara_B_KS_psi2S",
            "latex": "$ \\vert{\\cal{A}}_{\\parallel}\\vert^{2} ( B \\to \\psi(2S) K^{*} ) $",
            "category": "B/cc",
            "average": 0.22,
            "error": 0.06324555320334288,
            "measurements": [
                {
                    "value": 0.22,
                    "error": 0.066332495807108
                }
            ]
        },
        {
            "name": "Azero_B_KS_psi2S",
            "latex": "$ \\vert{\\cal{A}}_{0}\\vert^{2} ( B \\to \\psi(2S) K^{*} ) $",
            "category": "B/cc",
            "average": 0.48,
            "error": 0.053851648071342705,
            "measurements": [
                {
                    "value": 0.48,
                    "error": 0.057445626465380296
                }
            ]
        },
        {
            "name": "Aperp_B_KS_Jpsi",
            "latex": "$ \\vert{\\cal{A}}_{\\perp}\\vert^{2} ( B \\to J/\\psi K^{*} ) $",
            "category": "B/cc",
            "average": 0.20997568389057744,
            "error": 0.006285990599082745,
            "measurements": [
                {
                    "value": 0.201,
                    "error": 0.011999999999999999
                },
                {
                    "value": 0.195,
                    "error": 0.01649242250247064
                },
                {
                    "value": 0.233,
                    "error": 0.012247448713915891
                }
            ]
        },
        {
            "name": "Apara_B_KS_chi1c",
            "latex": "$ \\vert{\\cal{A}}_{\\parallel}\\vert^{2} ( B \\to \\chi_{c1} K^{*} ) $",
            "category": "B/cc",
            "average": 0.2,
            "error": 0.08062257748294252,
            "measurements": [
                {
                    "value": 0.2,
                    "error": 0.09000000000000001
                }
            ]
        },
        {
            "name": "Deltapara_B_KS_chi1c",
            "latex": "$ \\delta_{\\parallel} ( B \\to \\chi_{c1} K^{*} ) $",
            "category": "B/cc",
            "average": 0.0,
            "error": 0.3162277660560649,
            "measurements": [
                {
                    "value": 0.0,
                    "error": 0.33166247903554
                }
            ]
        },
        {
            "name": "Azero_B_KS_chi1c",
            "latex": "$ \\vert{\\cal{A}}_{0}\\vert^{2} ( B \\to \\chi_{c1} K^{*} ) $",
            "category": "B/cc",
            "average": 0.77,
            "error": 0.08062257748303514,
            "measurements": [
                {
                    "value": 0.77,
                    "error": 0.09000000000000001
                }
            ]
        },
        {
            "name": "BR_B_D0bar_K_pi0_D0",
            "latex": "$ {\\cal{B}} ( B \\to D^{0} \\bar{D}^{0} \\pi^{0} K ) $",
            "category": "B/DD",
            "average": 0.00127,
            "error": 0.00043913663366419806,
            "measurements": [
                {
                    "value": 0.00127,
                    "error": 0.0005359482417626411
                }
            ]
        },
        {
            "name": "BR_B_X3872_K.BR_X3872_D0bar_DS0",
            "latex": "$ {{\\cal{B}} ( B \\to X(3872) K )\\times {\\cal{B}} ( X(3872) \\to D^{*}(2007)^{0} \\bar{D}^{0} )} $",
            "category": "B/other",
            "average": 0.0008,
            "error": 0.00022360679774997892,
            "measurements": [
                {
                    "value": 0.0008,
                    "error": 0.00024494897427831784
                }
            ]
        },
        {
            "name": "BR_B_Y3940_K.BR_Y3940_omega_Jpsi",
            "latex": "$ {{\\cal{B}} ( B \\to K Y(3940) )\\times {\\cal{B}} ( Y(3940) \\to J/\\psi \\omega(782) )} $",
            "category": "B/other",
            "average": 0.00071,
            "error": 0.00033615472627943223,
            "measurements": [
                {
                    "value": 0.00071,
                    "error": 0.000457274534606947
                }
            ]
        },
        {
            "name": "BR_B0bar_pi-_DS+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} \\pi^{-} ) $",
            "category": "Bd/D",
            "average": 0.025816613658206238,
            "error": 0.0012511388980253558,
            "measurements": [
                {
                    "value": 0.0222,
                    "error": 0.002716615541441225
                },
                {
                    "value": 0.029900000000000003,
                    "error": 0.0041
                },
                {
                    "value": 0.0279,
                    "error": 0.0025347583711273153
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_D0_p",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} p \\bar{p} ) $",
            "category": "Bd/D",
            "average": 0.0010356097560970424,
            "error": 6.850315997696213e-05,
            "measurements": [
                {
                    "value": 0.00118,
                    "error": 0.00027147743920996457
                },
                {
                    "value": 0.00102,
                    "error": 9.380831519646858e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_pi0_DS0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2007)^{0} \\pi^{0} ) $",
            "category": "Bd/D",
            "average": 0.002228383838384649,
            "error": 0.00022247460415730484,
            "measurements": [
                {
                    "value": 0.00139,
                    "error": 0.0004093897898091744
                },
                {
                    "value": 0.0030499999999999998,
                    "error": 0.00042
                }
            ]
        },
        {
            "name": "BR_B0bar_KS0892bar_D0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\bar{K}^{*}(892)^{0} ) $",
            "category": "Bd/D",
            "average": 0.00042423570009485483,
            "error": 6.290251188754941e-05,
            "measurements": [
                {
                    "value": 0.00048,
                    "error": 0.00012662072772268957
                },
                {
                    "value": 0.0004,
                    "error": 8.185352771872449e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_omega_DS10.BR_DS10_pi-_DS+",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D_1^{0}(H) \\omega(782) )\\times {\\cal{B}} ( D_1^{0}(H) \\to D^{*}(2010)^{+} \\pi^{-} )} $",
            "category": "Bd/D",
            "average": 0.0040999999999999995,
            "error": 0.0016124515496597103,
            "measurements": [
                {
                    "value": 0.0040999999999999995,
                    "error": 0.0019390719429665316
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_Ds+_Lambda0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D_s^{+} \\Lambda \\bar{p} ) $",
            "category": "Bd/D",
            "average": 0.00030886308230909323,
            "error": 7.33947029309803e-05,
            "measurements": [
                {
                    "value": 0.00036,
                    "error": 0.0001774823934929885
                },
                {
                    "value": 0.00029,
                    "error": 0.00010723805294763608
                }
            ]
        },
        {
            "name": "BR_B0bar_DSs-_rho+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D_s^{*-} \\rho(770)^{+} ) $",
            "category": "Bd/D",
            "average": 0.00041,
            "error": 0.0001310630180840074,
            "measurements": [
                {
                    "value": 0.00041,
                    "error": 0.00013735098830440316
                }
            ]
        },
        {
            "name": "BR_B0bar_pi-_DSS+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{**+} \\pi^{-} ) $",
            "category": "Bd/D",
            "average": 0.0234,
            "error": 0.010940292500660124,
            "measurements": [
                {
                    "value": 0.0234,
                    "error": 0.014040299142112323
                }
            ]
        },
        {
            "name": "BR_B0bar_etaP_D0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\eta^\\prime(958) ) $",
            "category": "Bd/D",
            "average": 0.001376784184348211,
            "error": 0.00012321143824009354,
            "measurements": [
                {
                    "value": 0.00114,
                    "error": 0.0002583052642112202
                },
                {
                    "value": 0.00148,
                    "error": 0.00016340134638368194
                }
            ]
        },
        {
            "name": "BR_B0bar_Ds+_K-_pi+_pi-.BR_Bsbar_Ds+_K-_pi+_pi-",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to D_s^{+} K^{-}  \\pi^{+}  \\pi^{-} )}{{\\cal{B}} ( \\bar{B}_s^{0} \\to D_s^{+} K^{-}  \\pi^{+}  \\pi^{-} )} $",
            "category": "Bd/D",
            "average": 0.54,
            "error": 0.09899494936601219,
            "measurements": [
                {
                    "value": 0.54,
                    "error": 0.12124355652982141
                }
            ]
        },
        {
            "name": "BR_B0bar_KS-_DS+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} K^{*}(892)^{-} ) $",
            "category": "Bd/D",
            "average": 0.0032,
            "error": 0.0006688049042882386,
            "measurements": [
                {
                    "value": 0.0032,
                    "error": 0.0007311634564172364
                }
            ]
        },
        {
            "name": "BR_B0bar_pi-_D+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{+} \\pi^{-} ) $",
            "category": "Bd/D",
            "average": 0.026510149253731546,
            "error": 0.001492158608671627,
            "measurements": [
                {
                    "value": 0.030299999999999997,
                    "error": 0.003983716857408418
                },
                {
                    "value": 0.0255,
                    "error": 0.0023216373532487797
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_pi+_D0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} K^{-} \\pi^{+} ) $",
            "category": "Bd/D",
            "average": 0.0008800000000000001,
            "error": 0.000174928556845359,
            "measurements": [
                {
                    "value": 0.0008800000000000001,
                    "error": 0.00019672315572906004
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_pi-_DS+_p",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} p \\bar{p} \\pi^{-} ) $",
            "category": "Bd/D",
            "average": 0.00455,
            "error": 0.00042154477816715993,
            "measurements": [
                {
                    "value": 0.00455,
                    "error": 0.0005742821606144492
                }
            ]
        },
        {
            "name": "BR_B0bar_Lambda0bar_D0_Lambda0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\Lambda^{0} \\bar{\\Lambda}^{0} ) $",
            "category": "Bd/D",
            "average": 0.00010013812050851702,
            "error": 2.8099501151703117e-05,
            "measurements": [
                {
                    "value": 0.000105,
                    "error": 5.429502584672082e-05
                },
                {
                    "value": 9.800000000000001e-05,
                    "error": 3.846231649661071e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_DS0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2007)^{0} \\bar{K}^{0} ) $",
            "category": "Bd/D",
            "average": 0.00036,
            "error": 0.0001236931687685298,
            "measurements": [
                {
                    "value": 0.00036,
                    "error": 0.00012727922061357857
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_DS+_Lambda0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*+} \\Lambda \\bar{p} ) $",
            "category": "Bd/D",
            "average": 0.00025100000000000003,
            "error": 4.3600458713183265e-05,
            "measurements": [
                {
                    "value": 0.00025100000000000003,
                    "error": 5.591064299397746e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_f2_D0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} f_2(1270) ) $",
            "category": "Bd/D",
            "average": 0.001489784561940825,
            "error": 0.0001496917133063533,
            "measurements": [
                {
                    "value": 0.0016100000000000003,
                    "error": 0.0002584569596664017
                },
                {
                    "value": 0.0012,
                    "error": 0.0004722287581247038
                }
            ]
        },
        {
            "name": "BR_B0bar_KS-_DSs+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D_s^{*+} K^{*}(892)^{-} ) $",
            "category": "Bd/D",
            "average": 0.00032,
            "error": 0.00013614953290603304,
            "measurements": [
                {
                    "value": 0.00032,
                    "error": 0.000142007733567087
                }
            ]
        },
        {
            "name": "BR_B0bar_pi-_D1+.BR_D1+_pi-_pi+_D+",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D_1(2420)^{+} \\pi^{-} )\\times {\\cal{B}} ( D_1(2420)^{+} \\to D^{+} \\pi^{-} \\pi^{+} )} $",
            "category": "Bd/D",
            "average": 0.0008900000000000002,
            "error": 0.0002857523364717314,
            "measurements": [
                {
                    "value": 0.0008900000000000001,
                    "error": 0.0003737961609217508
                }
            ]
        },
        {
            "name": "BR_B0bar_D0_K-_K+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\bar{D}^{0} K^{-} K^{+} ) $",
            "category": "Bd/D",
            "average": 0.0006099332390022645,
            "error": 5.000000394370653e-05,
            "measurements": [
                {
                    "value": 0.00061,
                    "error": 6.557438524302e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_eta_DS0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2007)^{0} \\eta ) $",
            "category": "Bd/D",
            "average": 0.0022619679633870174,
            "error": 0.00022009983172818068,
            "measurements": [
                {
                    "value": 0.0014,
                    "error": 0.0004621688003316537
                },
                {
                    "value": 0.00269,
                    "error": 0.00035411862419251544
                }
            ]
        },
        {
            "name": "BR_B0bar_KS-_Ds+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D_s^{+} K^{*}(892)^{-} ) $",
            "category": "Bd/D",
            "average": 0.00035,
            "error": 0.00010290994448775623,
            "measurements": [
                {
                    "value": 0.00035,
                    "error": 0.00011082251154776297
                }
            ]
        },
        {
            "name": "BR_B0bar_pi-_K0_DS+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} K^{0} \\pi^{-} ) $",
            "category": "Bd/D",
            "average": 0.003,
            "error": 0.0007605261336732618,
            "measurements": [
                {
                    "value": 0.003,
                    "error": 0.000816578226503744
                }
            ]
        },
        {
            "name": "BR_B0bar_pi-_K0_D+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{+} K^{0} \\pi^{-} ) $",
            "category": "Bd/D",
            "average": 0.004900000000000001,
            "error": 0.0008583705493549974,
            "measurements": [
                {
                    "value": 0.004900000000000001,
                    "error": 0.000991766101457395
                }
            ]
        },
        {
            "name": "BR_B0bar_pi-_pi-_pi+_DS+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} \\pi^{-} \\pi^{+} \\pi^{-} ) $",
            "category": "Bd/D",
            "average": 0.07187234042553191,
            "error": 0.0030394148372983707,
            "measurements": [
                {
                    "value": 0.0681,
                    "error": 0.010438869670610895
                },
                {
                    "value": 0.0726,
                    "error": 0.004563989482897611
                }
            ]
        },
        {
            "name": "BR_B0bar_KS0892bar_D0.BR_KS0892bar_K-_pi+",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\bar{K}^{*}(892)^{0} )\\times {\\cal{B}} ( \\bar{K}^{*}(892)^{0} \\to K^{-} \\pi^{+} )} $",
            "category": "Bd/D",
            "average": 0.00038,
            "error": 7.21110255092798e-05,
            "measurements": [
                {
                    "value": 0.00038,
                    "error": 8.246211251235322e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_KS-_D+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{+} K^{*}(892)^{-} ) $",
            "category": "Bd/D",
            "average": 0.0046,
            "error": 0.0007787810988975016,
            "measurements": [
                {
                    "value": 0.0046,
                    "error": 0.0009235799911215054
                }
            ]
        },
        {
            "name": "BR_B0bar_omega_DS0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2007)^{0} \\omega(782) ) $",
            "category": "Bd/D",
            "average": 0.003641755461863642,
            "error": 0.00035415555826227624,
            "measurements": [
                {
                    "value": 0.00229,
                    "error": 0.0006870953354520754
                },
                {
                    "value": 0.00455,
                    "error": 0.0006014981296729027
                }
            ]
        },
        {
            "name": "BR_B0bar_D0_K-_K+.BR_B0bar_D0_pi-_pi+",
            "latex": "$ \\frac{ {\\cal{B}} ( \\bar{B}^{0} \\to \\bar{D}^{0} K^{-} K^{+} )}  {{\\cal{B}} ( \\bar{B}^{0} \\to \\bar{D}^{0} \\pi^{-} \\pi^{+} )} $",
            "category": "Bd/D",
            "average": 0.5818014881558863,
            "error": 0.045534050082358134,
            "measurements": [
                {
                    "value": 0.056,
                    "error": 0.11044455622618979
                },
                {
                    "value": 0.6900000000000001,
                    "error": 0.05830951894845301
                }
            ]
        },
        {
            "name": "BR_B0bar_eta_D0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\eta ) $",
            "category": "Bd/D",
            "average": 0.0023592324805308505,
            "error": 0.0001251446326770566,
            "measurements": [
                {
                    "value": 0.00177,
                    "error": 0.00033734255586866004
                },
                {
                    "value": 0.0025299999999999997,
                    "error": 0.0001797220075561143
                }
            ]
        },
        {
            "name": "BR_B0bar_pi-_pi+_D0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\pi^{+} \\pi^{-} ) $",
            "category": "Bd/D",
            "average": 0.008431059547427878,
            "error": 0.00029757364393831785,
            "measurements": [
                {
                    "value": 0.00846,
                    "error": 0.0005897457079114693
                },
                {
                    "value": 0.008,
                    "error": 0.0022045407685048605
                },
                {
                    "value": 0.008400000000000001,
                    "error": 0.0012000000000000001
                }
            ]
        },
        {
            "name": "BR_B0bar_Ds-_pi+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D_s^{-} \\pi^{+} ) $",
            "category": "Bd/D",
            "average": 0.00021719870791779377,
            "error": 2.5152622957785196e-05,
            "measurements": [
                {
                    "value": 0.00024,
                    "error": 0.00013622169126950714
                },
                {
                    "value": 0.000199,
                    "error": 3.6386810797320505e-05
                },
                {
                    "value": 0.00025,
                    "error": 4.882622246293482e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_D0bar_KS0892bar",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\bar{D}^{0} \\bar{K}^{*}(892)^{0} ) $",
            "category": "Bd/D",
            "average": 0.0,
            "error": 5.830951894845304e-05,
            "measurements": [
                {
                    "value": 0.0,
                    "error": 6.557438524302e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_pi-_pi+_DS+.-BR_B0bar_pi-_pi-_pi+_DS+",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} \\pi^{+} K^{-} \\pi^{-} ) }{ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} \\pi^{-} \\pi^{-} \\pi^{+})} $",
            "category": "Bd/D",
            "average": 0.647,
            "error": 0.050931326312987836,
            "measurements": [
                {
                    "value": 0.647,
                    "error": 0.0617980582219215
                }
            ]
        },
        {
            "name": "BR_B0bar_DSs-_pi+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D_s^{*-} \\pi^{+} ) $",
            "category": "Bd/D",
            "average": 0.000212425662421288,
            "error": 2.9609943181597874e-05,
            "measurements": [
                {
                    "value": 0.000175,
                    "error": 4.445222154178574e-05
                },
                {
                    "value": 0.00026000000000000003,
                    "error": 5.306620879525622e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_Ds+.BR_B0bar_pi-D+",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to D_s^{+} K^{-} )}{{\\cal{B}} ( \\bar{B}^{0} \\to D_s^{+} \\pi^{-} )} $",
            "category": "Bd/D",
            "average": 0.0129,
            "error": 0.0009433981132056599,
            "measurements": [
                {
                    "value": 0.0129,
                    "error": 0.0012369316876852982
                }
            ]
        },
        {
            "name": "BR_B0bar_D12420_pi+_pi-.BR_D12420_DS+_pi-.-BR_B0bar_pi-_pi-_pi+_DS+",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to D_1(2420)^0 \\pi^{+} \\pi^{-} ) \\times {\\cal{B}} (D_1(2420)^0\\to D^{*}(2010)^{+} \\pi^{-})  }{ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} \\pi^{-} \\pi^{+} \\pi^{-})} $",
            "category": "Bd/D",
            "average": 0.20400000000000001,
            "error": 0.04741307836452635,
            "measurements": [
                {
                    "value": 0.20400000000000001,
                    "error": 0.05226853738148792
                }
            ]
        },
        {
            "name": "BR_B0bar_pi-_D1+.-BR_B0bar_pi-_pi-_pi+_D+.BR_D1+_pi-_pi+_D+",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to D_1(2420)^{+} \\pi^{-} ) \\times {\\cal{B}} ( D_1(2420)^{+} \\to D^{+} \\pi^{+} \\pi^{-} ) }{ {\\cal{B}} ( \\bar{B}^{0} \\to D^{+} \\pi^{+} \\pi^{-} \\pi^{-} )} $",
            "category": "Bd/D",
            "average": 0.21000000000000002,
            "error": 0.06450914184969712,
            "measurements": [
                {
                    "value": 0.21000000000000002,
                    "error": 0.07608846281073195
                }
            ]
        },
        {
            "name": "BR_B0bar_Ds-_rho+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D_s^{-} \\rho(770)^{+} ) $",
            "category": "Bd/D",
            "average": 0.00011000000000000002,
            "error": 9.018496125956464e-05,
            "measurements": [
                {
                    "value": 0.00011000000000000002,
                    "error": 9.507901661927646e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_pi-_pi-_pi+_DS+.-BR_B0bar_pi-_DS+",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} \\pi^{+} \\pi^{-} \\pi^{-} ) }{ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} \\pi^{-} )} $",
            "category": "Bd/D",
            "average": 2.64,
            "error": 0.1360147050871513,
            "measurements": [
                {
                    "value": 2.64,
                    "error": 0.1881488772222678
                }
            ]
        },
        {
            "name": "BR_B0bar_pi-_pi-_pi-_pi+_pi+_DS+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} \\pi^{-} \\pi^{+} \\pi^{-} \\pi^{+} \\pi^{-} ) $",
            "category": "Bd/D",
            "average": 0.04719999999999999,
            "error": 0.009231467922275402,
            "measurements": [
                {
                    "value": 0.0472,
                    "error": 0.011646029366269003
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_KS0892_D+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{+} K^{-} K^{*}(892)^{0} ) $",
            "category": "Bd/D",
            "average": 0.0088,
            "error": 0.0018601075237738272,
            "measurements": [
                {
                    "value": 0.0088,
                    "error": 0.002389560629069704
                }
            ]
        },
        {
            "name": "BR_B0bar_pi-_pi+_DS0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2007)^{0} \\pi^{+} \\pi^{-} ) $",
            "category": "Bd/D",
            "average": 0.006200000000000001,
            "error": 0.0021633307652783955,
            "measurements": [
                {
                    "value": 0.006200000000000001,
                    "error": 0.002814249455894058
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_D+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{+} K^{-} ) $",
            "category": "Bd/D",
            "average": 0.002145640302196147,
            "error": 0.00011240083086623708,
            "measurements": [
                {
                    "value": 0.0020099999999999996,
                    "error": 0.000267581763205193
                },
                {
                    "value": 0.0022,
                    "error": 0.00018681541692269407
                },
                {
                    "value": 0.00204,
                    "error": 0.0006029925372672535
                }
            ]
        },
        {
            "name": "BR_B0bar_pi-_DS0+.BR_DS0+_pi+_D0",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D_0^{*}(2400)^{+} \\pi^{-} )\\times {\\cal{B}} ( D_0^{*}(2400)^{+} \\to D^{0} \\pi^{+} )} $",
            "category": "Bd/D",
            "average": 0.0006000249283655893,
            "error": 0.00019849447144443326,
            "measurements": [
                {
                    "value": 0.0006,
                    "error": 0.0003321144381083123
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_pi-_pi+_D+.-BR_B0bar_pi-_pi-_pi+_D+",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to D^{+} K^{-} \\pi^{+} \\pi^{-} ) }{ {\\cal{B}} ( \\bar{B}^{0} \\to D^{+} \\pi^{+} \\pi^{-} \\pi^{-} )} $",
            "category": "Bd/D",
            "average": 0.5900000000000001,
            "error": 0.12083045973546655,
            "measurements": [
                {
                    "value": 0.5900000000000001,
                    "error": 0.13076696830622023
                }
            ]
        },
        {
            "name": "BR_B0bar_Ds-_a2+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D_s^{-} a_2(1320)^{+} ) $",
            "category": "Bd/D",
            "average": 0.00064,
            "error": 0.0008199551098851607,
            "measurements": [
                {
                    "value": 0.00064,
                    "error": 0.0008348040995041129
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_KS0892_DS+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} K^{-} K^{*}(892)^{0} ) $",
            "category": "Bd/D",
            "average": 0.0129,
            "error": 0.0033301651610693423,
            "measurements": [
                {
                    "value": 0.0129,
                    "error": 0.004164132562731402
                }
            ]
        },
        {
            "name": "BR_B0bar_pi-_DS+.-BR_B0bar_pi-_D+",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} \\pi^{-} )}{{\\cal{B}} ( \\bar{B}^{0} \\to D^{+} \\pi^{-} )} $",
            "category": "Bd/D",
            "average": 0.99,
            "error": 0.13601470508675836,
            "measurements": [
                {
                    "value": 0.99,
                    "error": 0.157797338380595
                }
            ]
        },
        {
            "name": "BR_B0bar_rho0_D0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\rho(770)^{0} ) $",
            "category": "Bd/D",
            "average": 0.003167483585721481,
            "error": 0.00030004281660832316,
            "measurements": [
                {
                    "value": 0.0029,
                    "error": 0.0011489125293076055
                },
                {
                    "value": 0.00319,
                    "error": 0.0005473572873361605
                }
            ]
        },
        {
            "name": "BR_B0bar_pi-_DS2+.BR_DS2+_pi+_D0",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D_2^{*}(2460)^{+} \\pi^{-} )\\times {\\cal{B}} ( D_2^{*}(2460)^{+} \\to D^{0} \\pi^{+} )} $",
            "category": "Bd/D",
            "average": 0.0021500109026191504,
            "error": 0.0003361548570113109,
            "measurements": [
                {
                    "value": 0.00215,
                    "error": 0.00045989129150267674
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_DS+.-BR_B0bar_pi-_DS+",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} K^{-} )}{{\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} \\pi^{-} )} $",
            "category": "Bd/D",
            "average": 0.1551434898139885,
            "error": 0.015193132218643473,
            "measurements": [
                {
                    "value": 0.074,
                    "error": 0.017233687939614085
                },
                {
                    "value": 0.776,
                    "error": 0.05327288240746881
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_D0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\bar{K}^{0} ) $",
            "category": "Bd/D",
            "average": 0.0005231474190220804,
            "error": 6.675342864340215e-05,
            "measurements": [
                {
                    "value": 0.0005,
                    "error": 0.00015110556576479546
                },
                {
                    "value": 0.00053,
                    "error": 8.185352771872449e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_DSs-_a0+980",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D_s^{*-} a_0(980)^{+} ) $",
            "category": "Bd/D",
            "average": 0.00014,
            "error": 0.0001871775280651365,
            "measurements": [
                {
                    "value": 0.00014,
                    "error": 0.00018934990414451298
                }
            ]
        },
        {
            "name": "BR_B0bar_pi-_omega_DS+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} \\omega(782) \\pi^{-} ) $",
            "category": "Bd/D",
            "average": 0.02413964326812404,
            "error": 0.0016099106894726261,
            "measurements": [
                {
                    "value": 0.023100000000000002,
                    "error": 0.002264950330581225
                },
                {
                    "value": 0.0288,
                    "error": 0.004900000000000001
                }
            ]
        },
        {
            "name": "BR_B0bar_omega_D0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\omega(782) ) $",
            "category": "Bd/D",
            "average": 0.0025437980722794818,
            "error": 0.00015611454470840978,
            "measurements": [
                {
                    "value": 0.00281,
                    "error": 0.0007912016177940992
                },
                {
                    "value": 0.00237,
                    "error": 0.00045793012567421247
                },
                {
                    "value": 0.00257,
                    "error": 0.00022649503305812252
                }
            ]
        },
        {
            "name": "BR_B0bar_pi0_D0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\pi^{0} ) $",
            "category": "Bd/D",
            "average": 0.0026241711549972427,
            "error": 0.00014580714905565873,
            "measurements": [
                {
                    "value": 0.0022500000000000003,
                    "error": 0.0005143928459844674
                },
                {
                    "value": 0.00269,
                    "error": 0.0002046948949045872
                }
            ]
        },
        {
            "name": "BR_B0bar_Ds-_a0+980",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D_s^{-} a_0(980)^{+} ) $",
            "category": "Bd/D",
            "average": 6e-05,
            "error": 0.00012535563038088953,
            "measurements": [
                {
                    "value": 6e-05,
                    "error": 0.0001257202072429511
                }
            ]
        },
        {
            "name": "BR_B0bar_pi-_pi-_pi+_D+.-BR_B0bar_pi-_D+",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to D^{+} \\pi^{+} \\pi^{-} \\pi^{-} ) }{ {\\cal{B}} ( \\bar{B}^{0} \\to D^{+} \\pi^{-} )} $",
            "category": "Bd/D",
            "average": 2.38,
            "error": 0.23706539179595149,
            "measurements": [
                {
                    "value": 2.38,
                    "error": 0.3167017524422623
                }
            ]
        },
        {
            "name": "BR_B0bar_pi-_KS0_Ds+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D_s^{+} K_S^{0} \\pi^{-} ) $",
            "category": "Bd/D",
            "average": 0.00055,
            "error": 0.00016522711641858305,
            "measurements": [
                {
                    "value": 0.00055,
                    "error": 0.00019416487838947602
                }
            ]
        },
        {
            "name": "BR_B0bar_pi-_DSS+.-BR_B0bar_pi-_D+",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to D^{**+} \\pi^{-} )}{{\\cal{B}} ( \\bar{B}^{0} \\to D^{+} \\pi^{-} )} $",
            "category": "Bd/D",
            "average": 0.77,
            "error": 0.36400549443923663,
            "measurements": [
                {
                    "value": 0.77,
                    "error": 0.46540305112880387
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_DS0_p",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2007)^{0} p \\bar{p} ) $",
            "category": "Bd/D",
            "average": 0.0009896107962746366,
            "error": 0.00010866533921862821,
            "measurements": [
                {
                    "value": 0.0012,
                    "error": 0.0004295249046094037
                },
                {
                    "value": 0.0009699999999999999,
                    "error": 0.0001452583904633395
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_Ds+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D_s^{+} K^{-} ) $",
            "category": "Bd/D",
            "average": 0.00022548774143687787,
            "error": 2.431891132956384e-05,
            "measurements": [
                {
                    "value": 0.00045999999999999996,
                    "error": 0.00022190828260052479
                },
                {
                    "value": 0.000191,
                    "error": 3.3970575502926064e-05
                },
                {
                    "value": 0.00029,
                    "error": 4.886716689148247e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_D+_Lambda0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{+} \\Lambda \\bar{p} ) $",
            "category": "Bd/D",
            "average": 0.00033600000000000004,
            "error": 7.68439978137525e-05,
            "measurements": [
                {
                    "value": 0.00033600000000000004,
                    "error": 8.854942122905153e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_DsJS+2317.BR_DsJS+2317_pi0_Ds+",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D_{sJ}^{*}(2317)^{+} K^{-} )\\times {\\cal{B}} ( D_{sJ}^{*}(2317)^{+} \\to D_s^{+} \\pi^{0} )} $",
            "category": "Bd/D",
            "average": 0.00053,
            "error": 0.00020981569158284895,
            "measurements": [
                {
                    "value": 0.00053,
                    "error": 0.0002620523961011437
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_DS+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} K^{-} ) $",
            "category": "Bd/D",
            "average": 0.00204,
            "error": 0.00047180504448341814,
            "measurements": [
                {
                    "value": 0.00204,
                    "error": 0.0005264028875300743
                }
            ]
        },
        {
            "name": "BR_B0bar_pi-_pi-_pi+_pi+_DS0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2007)^{0} \\pi^{-} \\pi^{+} \\pi^{-} \\pi^{+} ) $",
            "category": "Bd/D",
            "average": 0.026000000000000002,
            "error": 0.005981638571495273,
            "measurements": [
                {
                    "value": 0.026000000000000002,
                    "error": 0.007033491309442274
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_pi-_pi+_D0_p",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} p \\bar{p} \\pi^{-} \\pi^{+} ) $",
            "category": "Bd/D",
            "average": 0.0029900000000000005,
            "error": 0.0004965883607174054,
            "measurements": [
                {
                    "value": 0.0029900000000000005,
                    "error": 0.0006701492371106604
                }
            ]
        },
        {
            "name": "BR_B0bar_etaP_DS0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2007)^{0} \\eta^\\prime(958) ) $",
            "category": "Bd/D",
            "average": 0.001403109463584097,
            "error": 0.00021611080810109254,
            "measurements": [
                {
                    "value": 0.00121,
                    "error": 0.00046086874487211654
                },
                {
                    "value": 0.00148,
                    "error": 0.000286705423736629
                }
            ]
        },
        {
            "name": "BR_B0bar_D0_Sigma0_Lambdabar+B0bar_D0_Lambda_Sigma0bar",
            "latex": "$ {\\cal{B}}(\\bar{B}^{0}\\to D^{0}\\Sigma^{0}\\bar\\Lambda+\\bar{B}^{0}\\to D^{0}\\Lambda\\bar\\Sigma^{0}) $",
            "category": "Bd/D",
            "average": 0.00015000000000000001,
            "error": 9.015716374087462e-05,
            "measurements": [
                {
                    "value": 0.00015000000000000001,
                    "error": 9.50262975460181e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_phi_D0.BR_B0bar_pi+_pi-_D0",
            "latex": "$ \\frac{ {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\phi(1020) ) }{  {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\pi^+ \\pi^- )} $",
            "category": "Bd/D",
            "average": 0.012,
            "error": 0.007615773105863919,
            "measurements": [
                {
                    "value": 0.012,
                    "error": 0.00818535277187245
                }
            ]
        },
        {
            "name": "BR_B0bar_D0_K-_pi+.-BR_B0bar_D0_pi-_pi+",
            "latex": "$ \\frac{ {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} K^{-} \\pi^{+} )}  {{\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\pi^{-} \\pi^{+} )} $",
            "category": "Bd/D",
            "average": 0.106,
            "error": 0.010630145812734663,
            "measurements": [
                {
                    "value": 0.106,
                    "error": 0.013304134695650071
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_DS2+.BR_DS2+_pi+_D0",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D_2^{*}(2460)^{+} K^{-} )\\times {\\cal{B}} ( D_2^{*}(2460)^{+} \\to D^{0} \\pi^{+} )} $",
            "category": "Bd/D",
            "average": 0.000183,
            "error": 5.0606323715519996e-05,
            "measurements": [
                {
                    "value": 0.000183,
                    "error": 5.934644049983117e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_D+.-BR_B0bar_pi-_D+",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to D^{+} K^{-} )}{{\\cal{B}} ( \\bar{B}^{0} \\to D^{+} \\pi^{-} )} $",
            "category": "Bd/D",
            "average": 0.08182363390890357,
            "error": 0.002694860901586119,
            "measurements": [
                {
                    "value": 0.0822,
                    "error": 0.0037027017163147238
                },
                {
                    "value": 0.068,
                    "error": 0.01797220075561143
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_DSs+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D_s^{*+} K^{-} ) $",
            "category": "Bd/D",
            "average": 0.00021882036933191972,
            "error": 2.9694131846955497e-05,
            "measurements": [
                {
                    "value": 0.000202,
                    "error": 4.5552167895721496e-05
                },
                {
                    "value": 0.00024,
                    "error": 4.882622246293482e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_pi-_D+_p",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{+} p \\bar{p} \\pi^{-} ) $",
            "category": "Bd/D",
            "average": 0.0033200000000000005,
            "error": 0.00030675723300355943,
            "measurements": [
                {
                    "value": 0.00332,
                    "error": 0.00042213741838410866
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_pi-_pi+_DS0_p",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2007)^{0} p \\bar{p} \\pi^{-} \\pi^{+} ) $",
            "category": "Bd/D",
            "average": 0.00191,
            "error": 0.00046227697325304875,
            "measurements": [
                {
                    "value": 0.00191,
                    "error": 0.0005457105459856901
                }
            ]
        },
        {
            "name": "BR_B0bar_rho0_D0.-BR_B0bar_omega_D0",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\rho(770)^{0} )}{{\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\omega(782) )} $",
            "category": "Bd/D",
            "average": 1.6,
            "error": 0.8000000000828252,
            "measurements": [
                {
                    "value": 1.6,
                    "error": 0.8
                }
            ]
        },
        {
            "name": "BR_B0bar_D0bar_K-_D+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{+} \\bar{D}^{0} K^{-} ) $",
            "category": "Bd/DD",
            "average": 0.010700000000000001,
            "error": 0.0011401754250991382,
            "measurements": [
                {
                    "value": 0.010700000000000001,
                    "error": 0.0014525839046333952
                }
            ]
        },
        {
            "name": "BR_B0bar_Ds-_DS+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D_s^{-} D^{*}(2010)^{+} ) $",
            "category": "Bd/DD",
            "average": 0.06824963715529844,
            "error": 0.015955694280043998,
            "measurements": [
                {
                    "value": 0.056999999999999995,
                    "error": 0.020445048300260872
                },
                {
                    "value": 0.10300000000000001,
                    "error": 0.04342810150121693
                }
            ]
        },
        {
            "name": "BR_B0bar_DS-_KS0_DS+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} D^{*}(2010)^{-} K_S^{0} ) $",
            "category": "Bd/DD",
            "average": 0.03899385371850038,
            "error": 0.00570437996892174,
            "measurements": [
                {
                    "value": 0.034,
                    "error": 0.01067707825203131
                },
                {
                    "value": 0.044000000000000004,
                    "error": 0.010692053123698928
                }
            ]
        },
        {
            "name": "BR_B0bar_DsJS-2317_DS+.BR_DsJS-2317_Ds-_pi0",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D_{sJ}^{*}(2317)^{-} D^{*}(2010)^{+} )\\times {\\cal{B}} ( D_{sJ}^{*}(2317)^{-} \\to D_s^{-} \\pi^{0} )} $",
            "category": "Bd/DD",
            "average": 0.015,
            "error": 0.006046509852918939,
            "measurements": [
                {
                    "value": 0.015,
                    "error": 0.007541532982725243
                }
            ]
        },
        {
            "name": "BR_B0bar_DsJ-2460_DS+.BR_DsJ-2460_Ds-_gamma",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D_{sJ}(2460)^{-} D^{*}(2010)^{+} )\\times {\\cal{B}} ( D_{sJ}(2460)^{-} \\to D_s^{-} \\gamma )} $",
            "category": "Bd/DD",
            "average": 0.023,
            "error": 0.007805477344379624,
            "measurements": [
                {
                    "value": 0.023,
                    "error": 0.010612431992690428
                }
            ]
        },
        {
            "name": "BR_B0bar_DsJ-2460_D+.BR_DsJ-2460_DSs-_pi0",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D^{+} D_{sJ}(2460)^{-} )\\times {\\cal{B}} ( D_{sJ}(2460)^{-} \\to D_s^{*-} \\pi^{0} )} $",
            "category": "Bd/DD",
            "average": 0.024816371560686813,
            "error": 0.007458133802906091,
            "measurements": [
                {
                    "value": 0.0227,
                    "error": 0.011757776273456384
                },
                {
                    "value": 0.027999999999999997,
                    "error": 0.015679113421827602
                }
            ]
        },
        {
            "name": "BR_B0bar_D1s-_D+.BR_D1s-_DS-_K0bar",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D_{s1}(2536)^{-} D^{+} )\\times {\\cal{B}} ( D_{s1}(2536)^{-} \\to D^{*}(2010)^{-} \\bar{K}^{0} )} $",
            "category": "Bd/DD",
            "average": 0.00261,
            "error": 0.0010756393447619878,
            "measurements": [
                {
                    "value": 0.00261,
                    "error": 0.0011194194924156005
                }
            ]
        },
        {
            "name": "BR_B0bar_DS-_D+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{-} D^{+} ) $",
            "category": "Bd/DD",
            "average": 0.006139139427795805,
            "error": 0.0004944511118735194,
            "measurements": [
                {
                    "value": 0.0117,
                    "error": 0.004136998004128013
                },
                {
                    "value": 0.00614,
                    "error": 0.0007642643521714198
                },
                {
                    "value": 0.0057,
                    "error": 0.0012149074038789954
                }
            ]
        },
        {
            "name": "BR_B0bar_DS-_DS+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{-} D^{*}(2010)^{+} ) $",
            "category": "Bd/DD",
            "average": 0.007888280533039398,
            "error": 0.0004366906782320062,
            "measurements": [
                {
                    "value": 0.008100000000000001,
                    "error": 0.0017492855684535901
                },
                {
                    "value": 0.00782,
                    "error": 0.0009297311439335567
                },
                {
                    "value": 0.00782,
                    "error": 0.0009297311439335567
                },
                {
                    "value": 0.0081,
                    "error": 0.0015327100182356739
                }
            ]
        },
        {
            "name": "BR_B0bar_DsJS-2317_D+.BR_DsJS-2317_Ds-_pi0",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D^{+} D_{sJ}^{*}(2317)^{-} )\\times {\\cal{B}} ( D_{sJ}^{*}(2317)^{-} \\to D_s^{-} \\pi^{0} )} $",
            "category": "Bd/DD",
            "average": 0.010413665264340538,
            "error": 0.0015085925223435428,
            "measurements": [
                {
                    "value": 0.0086,
                    "error": 0.004721989915246666
                },
                {
                    "value": 0.010199999999999999,
                    "error": 0.001970785191208305
                },
                {
                    "value": 0.018000000000000002,
                    "error": 0.00920983427281148
                }
            ]
        },
        {
            "name": "BR_B0bar_D1s-_DS+.BR_D1s-_DS0bar_K+",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D_{s1}(2536)^{-} D^{*}(2010)^{+} )\\times {\\cal{B}} ( D_{s1}(2536)^{-} \\to \\bar{D}^{*}(2007)^{0} K^{+} )} $",
            "category": "Bd/DD",
            "average": 0.0033200000000000005,
            "error": 0.001099999999999999,
            "measurements": [
                {
                    "value": 0.00332,
                    "error": 0.001282809416865966
                }
            ]
        },
        {
            "name": "BR_B0bar_Ds-_D+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D_s^{-} D^{+} ) $",
            "category": "Bd/DD",
            "average": 0.07674330214316087,
            "error": 0.0077760494852839954,
            "measurements": [
                {
                    "value": 0.075,
                    "error": 0.014
                },
                {
                    "value": 0.09000000000000001,
                    "error": 0.026758176320519304
                }
            ]
        },
        {
            "name": "BR_B0bar_D0bar_K-_DS+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} \\bar{D}^{0} K^{-} ) $",
            "category": "Bd/DD",
            "average": 0.024700000000000003,
            "error": 0.002059126028197401,
            "measurements": [
                {
                    "value": 0.024700000000000003,
                    "error": 0.0027349588662354688
                }
            ]
        },
        {
            "name": "BR_B0bar_DS0bar_K0bar_D0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\bar{D}^{*}(2007)^{0} \\bar{K}^{0} ) $",
            "category": "Bd/DD",
            "average": 0.0108,
            "error": 0.00481663783151692,
            "measurements": [
                {
                    "value": 0.0108,
                    "error": 0.0060133185513491635
                }
            ]
        },
        {
            "name": "BR_B0bar_Ds-_DS+.BR_Ds-_pi-_phi",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D_s^{-} D^{*}(2010)^{+} )\\times {\\cal{B}} ( D_s^{-} \\to \\phi(1020) \\pi^{-} )} $",
            "category": "Bd/DD",
            "average": 0.005110000000000001,
            "error": 0.0011840608092492544,
            "measurements": [
                {
                    "value": 0.005110000000000001,
                    "error": 0.0013857849761056006
                }
            ]
        },
        {
            "name": "BR_B0bar_D-_D1s+.BR_D1s+_DS_K",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D_{s1}(2536)^{+} D^{-} )\\times {\\cal{B}} ( D_{s1}(2536)^{+} \\to D^{*}(2007)^{0} K^{+} + D^{*}(2010)^{+} K^{0} )} $",
            "category": "Bd/DD",
            "average": 0.00275,
            "error": 0.0007169379331573967,
            "measurements": [
                {
                    "value": 0.00275,
                    "error": 0.0008022468448052631
                }
            ]
        },
        {
            "name": "BR_B0bar_DSs-_DS+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D_s^{*-} D^{*}(2010)^{+} ) $",
            "category": "Bd/DD",
            "average": 0.18230301581423897,
            "error": 0.015639959545782386,
            "measurements": [
                {
                    "value": 0.165,
                    "error": 0.03536947836765479
                },
                {
                    "value": 0.188,
                    "error": 0.025787593916455253
                },
                {
                    "value": 0.197,
                    "error": 0.08262566187329455
                }
            ]
        },
        {
            "name": "BR_B0bar_DS-_D1s+.BR_D1s+_DS_K",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D_{s1}(2536)^{+} D^{*}(2010)^{-} )\\times {\\cal{B}} ( D_{s1}(2536)^{+} \\to D^{*}(2007)^{0} K^{+} + D^{*}(2010)^{+} K^{0} )} $",
            "category": "Bd/DD",
            "average": 0.00501,
            "error": 0.001397891269019161,
            "measurements": [
                {
                    "value": 0.00501,
                    "error": 0.0015633617623570047
                }
            ]
        },
        {
            "name": "BR_B0bar_Ds-_D+.BR_Ds-_pi-_phi",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D_s^{-} D^{+} )\\times {\\cal{B}} ( D_s^{-} \\to \\phi(1020) \\pi^{-} )} $",
            "category": "Bd/DD",
            "average": 0.00267,
            "error": 0.0007700649323271383,
            "measurements": [
                {
                    "value": 0.00267,
                    "error": 0.0009021640649017228
                }
            ]
        },
        {
            "name": "BR_B0bar_DsJ-2460_DS+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D_{sJ}(2460)^{-} D^{*}(2010)^{+} ) $",
            "category": "Bd/DD",
            "average": 0.08800000000000001,
            "error": 0.02441311123146737,
            "measurements": [
                {
                    "value": 0.08800000000000001,
                    "error": 0.028142494558940582
                }
            ]
        },
        {
            "name": "BR_B0bar_DS0bar_K-_DS+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} \\bar{D}^{*}(2007)^{0} K^{-} ) $",
            "category": "Bd/DD",
            "average": 0.10600000000000001,
            "error": 0.009211405973031467,
            "measurements": [
                {
                    "value": 0.106,
                    "error": 0.012601983970788091
                }
            ]
        },
        {
            "name": "BR_B0bar_D-_K0bar_D+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{+} D^{-} \\bar{K}^{0} ) $",
            "category": "Bd/DD",
            "average": 0.0075,
            "error": 0.0016970562748477144,
            "measurements": [
                {
                    "value": 0.0075,
                    "error": 0.0020784609690826525
                }
            ]
        },
        {
            "name": "BR_B0bar_D0bar_K0bar_pi0_D0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\bar{D}^{0} \\pi^{0} \\bar{K}^{0} ) $",
            "category": "Bd/DD",
            "average": 0.0017299999999999998,
            "error": 0.0008218497827516276,
            "measurements": [
                {
                    "value": 0.00173,
                    "error": 0.0009257635022207429
                }
            ]
        },
        {
            "name": "BR_B0bar_DS0bar_K-_D+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{+} \\bar{D}^{*}(2007)^{0} K^{-} ) $",
            "category": "Bd/DD",
            "average": 0.0346,
            "error": 0.004114608122288197,
            "measurements": [
                {
                    "value": 0.0346,
                    "error": 0.005533534132902769
                }
            ]
        },
        {
            "name": "BR_B0bar_D-_D+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{+} D^{-} ) $",
            "category": "Bd/DD",
            "average": 0.002171120672838302,
            "error": 0.00017158326189828285,
            "measurements": [
                {
                    "value": 0.0021200000000000004,
                    "error": 0.00030066592756745815
                },
                {
                    "value": 0.00321,
                    "error": 0.0008863972021616494
                },
                {
                    "value": 0.00197,
                    "error": 0.00034641016151377546
                },
                {
                    "value": 0.0028,
                    "error": 0.0008154753215150045
                }
            ]
        },
        {
            "name": "BR_B0bar_D1s-_D+.BR_D1s-_DS0bar_K-",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D_{s1}(2536)^{-} D^{+} )\\times {\\cal{B}} ( D_{s1}(2536)^{-} \\to K^{-} \\bar{D}^{*}(2007)^{0} )} $",
            "category": "Bd/DD",
            "average": 0.00171,
            "error": 0.0005768882040742383,
            "measurements": [
                {
                    "value": 0.00171,
                    "error": 0.0006596969000988257
                }
            ]
        },
        {
            "name": "BR_B0bar_DS0bar_K0bar_DS0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2007)^{0} \\bar{D}^{*}(2007)^{0} \\bar{K}^{0} ) $",
            "category": "Bd/DD",
            "average": 0.024,
            "error": 0.008668333173107756,
            "measurements": [
                {
                    "value": 0.024,
                    "error": 0.010955820370926133
                }
            ]
        },
        {
            "name": "BR_B0bar_DS-_K0bar_DS+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{-} D^{*}(2010)^{+} \\bar{K}^{0} ) $",
            "category": "Bd/DD",
            "average": 0.08259999999999999,
            "error": 0.007961155694998064,
            "measurements": [
                {
                    "value": 0.08259999999999999,
                    "error": 0.010405287117614776
                }
            ]
        },
        {
            "name": "BR_B0bar_D1s-_DS+.BR_D1s-_DS-_K0bar",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D_{s1}(2536)^{-} D^{*}(2010)^{+} )\\times {\\cal{B}} ( D_{s1}(2536)^{-} \\to D^{*}(2010)^{-} \\bar{K}^{0} )} $",
            "category": "Bd/DD",
            "average": 0.005,
            "error": 0.0016519685227025366,
            "measurements": [
                {
                    "value": 0.005,
                    "error": 0.0017826665420094694
                }
            ]
        },
        {
            "name": "BR_B0bar_DsJ-2460_D+.BR_DsJ-2460_Ds-_gamma",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D^{+} D_{sJ}(2460)^{-} )\\times {\\cal{B}} ( D_{sJ}(2460)^{-} \\to D_s^{-} \\gamma )} $",
            "category": "Bd/DD",
            "average": 0.008104188582811587,
            "error": 0.002334904593992128,
            "measurements": [
                {
                    "value": 0.008199999999999999,
                    "error": 0.0040889295054046485
                },
                {
                    "value": 0.008,
                    "error": 0.004320318436170149
                }
            ]
        },
        {
            "name": "BR_B0bar_D1s-_DS+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D_{s1}(2536)^{-} D^{*}(2010)^{+} ) $",
            "category": "Bd/DD",
            "average": 0.092,
            "error": 0.024020824298928593,
            "measurements": [
                {
                    "value": 0.092,
                    "error": 0.024041630560342617
                }
            ]
        },
        {
            "name": "BR_B0bar_DSs-_D+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D_s^{*-} D^{+} ) $",
            "category": "Bd/DD",
            "average": 0.067,
            "error": 0.022825424421026745,
            "measurements": [
                {
                    "value": 0.067,
                    "error": 0.025337718918639857
                }
            ]
        },
        {
            "name": "BR_B0bar_D0bar_K0bar_D0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\bar{D}^{0} \\bar{K}^{0} ) $",
            "category": "Bd/DD",
            "average": 0.0027,
            "error": 0.0011180339887498945,
            "measurements": [
                {
                    "value": 0.0027,
                    "error": 0.001224744871391589
                }
            ]
        },
        {
            "name": "BR_B0bar_DsJ-2460_DS+.BR_DsJ-2460_DSs-_pi0",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D_{sJ}(2460)^{-} D^{*}(2010)^{+} )\\times {\\cal{B}} ( D_{sJ}(2460)^{-} \\to D_s^{*-} \\pi^{0} )} $",
            "category": "Bd/DD",
            "average": 0.055,
            "error": 0.022146610698776416,
            "measurements": [
                {
                    "value": 0.055,
                    "error": 0.028894632807291043
                }
            ]
        },
        {
            "name": "BR_B0bar_D0bar_D0.BR_B-_D0_Ds-",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\bar{D}^{0} )}{ {\\cal{B}} ( \\bar{B}^{-} \\to D^{0} \\bar{D}_s^{-} )} $",
            "category": "Bd/DD",
            "average": 0.0014,
            "error": 0.0006324555320336757,
            "measurements": [
                {
                    "value": 0.0014,
                    "error": 0.0006633249580710799
                }
            ]
        },
        {
            "name": "BR_B0bar_DsJ-2460_D+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D_{sJ}(2460)^{-} D^{+} ) $",
            "category": "Bd/DD",
            "average": 0.026000000000000002,
            "error": 0.01655294535724688,
            "measurements": [
                {
                    "value": 0.026000000000000002,
                    "error": 0.01797220075561143
                }
            ]
        },
        {
            "name": "BR_B0bar_D-_K0bar_DS+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} D^{-} \\bar{K}^{0} ) $",
            "category": "Bd/DD",
            "average": 0.0641,
            "error": 0.005307541803886242,
            "measurements": [
                {
                    "value": 0.0641,
                    "error": 0.006586349520030045
                }
            ]
        },
        {
            "name": "BR_B0bar_DSs-_D+.BR_Ds-_pi-_phi",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D_s^{*-} D^{+} )\\times {\\cal{B}} ( D_s^{-} \\to \\phi(1020) \\pi^{-} )} $",
            "category": "Bd/DD",
            "average": 0.00414,
            "error": 0.00151647617851386,
            "measurements": [
                {
                    "value": 0.00414,
                    "error": 0.0017841804841439107
                }
            ]
        },
        {
            "name": "BR_B0bar_DSs-_DS+.BR_Ds-_pi-_phi",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to D_s^{*-} D^{*}(2010)^{+} )\\times {\\cal{B}} ( D_s^{-} \\to \\phi(1020) \\pi^{-} )} $",
            "category": "Bd/DD",
            "average": 0.012199999999999999,
            "error": 0.0031112698372208077,
            "measurements": [
                {
                    "value": 0.012199999999999999,
                    "error": 0.00381051177665153
                }
            ]
        },
        {
            "name": "BR_B0bar_KS0892bar_chi1c",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\chi_{c1} \\bar{K}^{*}(892)^{0} ) $",
            "category": "Bd/cc",
            "average": 0.0026637864885704736,
            "error": 0.00024722731410131986,
            "measurements": [
                {
                    "value": 0.0031000000000000003,
                    "error": 0.00103440804327886
                },
                {
                    "value": 0.0025,
                    "error": 0.00034641016151377546
                },
                {
                    "value": 0.00327,
                    "error": 0.00093552124508212
                }
            ]
        },
        {
            "name": "BR_B0bar_KS0892bar_psi2S",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\psi(2S) \\bar{K}^{*}(892)^{0} ) $",
            "category": "Bd/cc",
            "average": 0.005924890573259397,
            "error": 0.0005301246733062678,
            "measurements": [
                {
                    "value": 0.00552,
                    "error": 0.0008538393512137739
                },
                {
                    "value": 0.009000000000000001,
                    "error": 0.002541653005427767
                },
                {
                    "value": 0.00649,
                    "error": 0.001475737103958561
                }
            ]
        },
        {
            "name": "BR_B0bar_KS0892_psi2S.-BR_B0bar_KS0892_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to \\psi(2S) K(892)^{*0} )}{{\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi  K(892)^{*0} )} $",
            "category": "Bd/cc",
            "average": 0.4767436761911075,
            "error": 0.018153972650405886,
            "measurements": [
                {
                    "value": 0.476,
                    "error": 0.0232379000772445
                }
            ]
        },
        {
            "name": "BR_B0bar_omega_Jpsi.-BR_B0bar_rho0_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\omega(782)) }{ {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\rho )} $",
            "category": "Bd/cc",
            "average": 0.89,
            "error": 0.21636240658835945,
            "measurements": [
                {
                    "value": 0.89,
                    "error": 0.2393144670921656
                }
            ]
        },
        {
            "name": "BR_B0bar_rho0_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\rho(770)^{0} ) $",
            "category": "Bd/cc",
            "average": 0.00024799999999977965,
            "error": 3.2249030993194186e-05,
            "measurements": [
                {
                    "value": 0.00016,
                    "error": 8.246211251235322e-05
                },
                {
                    "value": 0.00027000000000000006,
                    "error": 4.123105625617661e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_pi+_chi1c",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\chi_{c1} K^{-} \\pi^{+} ) $",
            "category": "Bd/cc",
            "average": 0.004998948306595658,
            "error": 0.0002713142241012135,
            "measurements": [
                {
                    "value": 0.00497,
                    "error": 0.0004137632173115441
                },
                {
                    "value": 0.005110000000000001,
                    "error": 0.0008321057625085889
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_phi_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\phi(1020) \\bar{K}^{0} ) $",
            "category": "Bd/cc",
            "average": 0.00102,
            "error": 0.0003929376546961624,
            "measurements": [
                {
                    "value": 0.00102,
                    "error": 0.0004059556626036888
                }
            ]
        },
        {
            "name": "BR_B0bar_Jpsi_f11285.BR_f11285_pi+pi-pi+pi-",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi f_1(1285) )\\times {\\cal{B}} ( f_1(1285) \\to \\pi^{+} \\pi^{-} \\pi^{+} \\pi^{-} )} $",
            "category": "Bd/cc",
            "average": 9.21e-06,
            "error": 2.2022777638335143e-06,
            "measurements": [
                {
                    "value": 9.21e-06,
                    "error": 2.2945151993395035e-06
                }
            ]
        },
        {
            "name": "BR_B0bar_pi-_pi+_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\pi^{+} \\pi^{-} ) $",
            "category": "Bd/cc",
            "average": 0.0004599999999999999,
            "error": 9.219544457292892e-05,
            "measurements": [
                {
                    "value": 0.00045999999999999996,
                    "error": 0.00011000000000000002
                }
            ]
        },
        {
            "name": "BR_B0bar_pi0_chi1c",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\chi_{c1} \\pi^{0} ) $",
            "category": "Bd/cc",
            "average": 0.00011200000000000001,
            "error": 2.7730849247724096e-05,
            "measurements": [
                {
                    "value": 0.00011200000000000001,
                    "error": 3.0215889859476257e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_K10bar_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\bar{K}_1^{0}(1270) ) $",
            "category": "Bd/cc",
            "average": 0.013000000000000001,
            "error": 0.004220300296547665,
            "measurements": [
                {
                    "value": 0.013000000000000001,
                    "error": 0.0052249401910452525
                }
            ]
        },
        {
            "name": "BR_B0bar_KS0_K+_K-_Jpsi.-BR_B0bar_KS0_pi+_pi-_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi K_S^{0} K^{+} K^{-} )}{{\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi K_S^{0} \\pi^{+} \\pi^{-} )} $",
            "category": "Bd/cc",
            "average": 0.046658971917872244,
            "error": 0.01077065101982782,
            "measurements": [
                {
                    "value": 0.047,
                    "error": 0.011661903789690599
                }
            ]
        },
        {
            "name": "BR_B0bar_K0_psi2S.BR_psi2S_chi1c_gamma",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\psi(2S) K^{0} )\\times {\\cal{B}} ( \\psi(2S) \\to \\chi_{c1} \\gamma ) $",
            "category": "Bd/cc",
            "average": 0.0068,
            "error": 0.0012206555615733704,
            "measurements": [
                {
                    "value": 0.0068,
                    "error": 0.0014071247279470287
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_pi+_chi1c.-BR_B0bar_K-_pi+_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to \\chi_{c1} K^{-} \\pi^{+} )}{{\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi K^{-} \\pi^{+} )} $",
            "category": "Bd/cc",
            "average": 0.474,
            "error": 0.055542776308008135,
            "measurements": [
                {
                    "value": 0.474,
                    "error": 0.07746612162745725
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_psi2S",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\psi(2S) \\bar{K}^{0} ) $",
            "category": "Bd/cc",
            "average": 0.005824897094540418,
            "error": 0.0005007533132108788,
            "measurements": [
                {
                    "value": 0.0047,
                    "error": 0.0010816653826391967
                },
                {
                    "value": 0.0067,
                    "error": 0.0011
                },
                {
                    "value": 0.0064600000000000005,
                    "error": 0.0009339164844888434
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_pi-_pi+_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\bar{K}^{0} \\pi^{+} \\pi^{-} ) $",
            "category": "Bd/cc",
            "average": 0.004386884846423944,
            "error": 0.00044264550394661217,
            "measurements": [
                {
                    "value": 0.0043,
                    "error": 0.000577408001330082
                },
                {
                    "value": 0.0103,
                    "error": 0.003923009049186606
                }
            ]
        },
        {
            "name": "BR_B0bar_KS0892bar_psi2S.-BR_B0bar_K0bar_psi2S",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to \\psi(2S) \\bar{K}^{*}(892)^{0} )}{{\\cal{B}} ( \\bar{B}^{0} \\to \\psi(2S) \\bar{K}^{0} )} $",
            "category": "Bd/cc",
            "average": 1.0,
            "error": 0.16643316977229444,
            "measurements": [
                {
                    "value": 1.0,
                    "error": 0.189208879284245
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_pi+_pi-_chi1c",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\chi_{c1} \\bar{K}^{0} \\pi^{+}  \\pi^{-} ) $",
            "category": "Bd/cc",
            "average": 0.00316,
            "error": 0.00047423622805517506,
            "measurements": [
                {
                    "value": 0.00316,
                    "error": 0.0005721013896155122
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_Jpsi_p",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\bar{p} p ) $",
            "category": "Bd/cc",
            "average": 4.509999999999999e-06,
            "error": 5.946427498927402e-07,
            "measurements": [
                {
                    "value": 4.509999999999999e-06,
                    "error": 7.397296803562772e-07
                }
            ]
        },
        {
            "name": "BR_B0bar_KS0892bar_etac",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\eta_c \\bar{K}^{*}(892)^{0} ) $",
            "category": "Bd/cc",
            "average": 0.0065311369506214625,
            "error": 0.0009386636405632255,
            "measurements": [
                {
                    "value": 0.016200000000000003,
                    "error": 0.007238750050412607
                },
                {
                    "value": 0.008,
                    "error": 0.00443147414850607
                },
                {
                    "value": 0.0057,
                    "error": 0.0014
                }
            ]
        },
        {
            "name": "BR_B0bar_etaprime_Jpsi.BR_Bsbar_etaprime_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\eta^{\\prime })}  {{\\cal{B}} ( \\bar{B}_{s}^{0} \\to J/\\psi \\eta^{\\prime } )} $",
            "category": "Bd/cc",
            "average": 0.228,
            "error": 0.06703730304838856,
            "measurements": [
                {
                    "value": 0.22799999999999998,
                    "error": 0.06901449123191447
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_omega_Jpsi.-BR_B-_K-_omega_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\omega(782) \\bar{K}^{0} ) }{ {\\cal{B}} ( B^{-} \\to J/\\psi \\omega(782) K^{-} )} $",
            "category": "Bd/cc",
            "average": 0.7,
            "error": 0.1414213562379021,
            "measurements": [
                {
                    "value": 0.7,
                    "error": 0.17320508075688776
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_etac.-BR_B0bar_K0bar_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to \\eta_c \\bar{K}^{0} )}{{\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\bar{K}^{0} )} $",
            "category": "Bd/cc",
            "average": 1.2942398888528626,
            "error": 0.5986711537646391,
            "measurements": [
                {
                    "value": 1.34,
                    "error": 0.46292547996410827
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\bar{K}^{0} ) $",
            "category": "Bd/cc",
            "average": 0.008641802378974849,
            "error": 0.0003198669415871612,
            "measurements": [
                {
                    "value": 0.0079,
                    "error": 0.0013379088160259654
                },
                {
                    "value": 0.0115,
                    "error": 0.003327160951922825
                },
                {
                    "value": 0.00869,
                    "error": 0.0004539823785126467
                }
            ]
        },
        {
            "name": "BR_B0bar_KS0892bar_Jpsi.-BR_B0bar_K0bar_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\bar{K}^{*}(892)^{0} )}{{\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\bar{K}^{0} )} $",
            "category": "Bd/cc",
            "average": 1.5028080808028452,
            "error": 0.09146911677958192,
            "measurements": [
                {
                    "value": 1.39,
                    "error": 0.38678159211627433
                },
                {
                    "value": 1.51,
                    "error": 0.12369316876852982
                }
            ]
        },
        {
            "name": "BR_B0bar_pi_pi_psi2S.BR_B0bar_pi_pi_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} \\bar{B}^{0} \\to \\psi(2S) \\pi^{+}  \\pi^{-} }{{\\cal{B}} \\bar{B}^{0} \\to J/\\psi \\pi^{+} \\pi^{-}  } $",
            "category": "Bd/cc",
            "average": 0.56072796970955,
            "error": 0.08632047328509924,
            "measurements": [
                {
                    "value": 0.56,
                    "error": 0.1
                }
            ]
        },
        {
            "name": "BR_B0bar_K10bar_Jpsi.-BR_B-_K-_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\bar{K}_1^{0}(1270) )}{{\\cal{B}} ( B^{-} \\to J/\\psi K^{-} )} $",
            "category": "Bd/cc",
            "average": 1.3,
            "error": 0.44045431086397846,
            "measurements": [
                {
                    "value": 1.3,
                    "error": 0.5219195340279956
                }
            ]
        },
        {
            "name": "BR_B0bar_K0_psi2S.BR_psi2S_chi2c_gamma",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\psi(2S) K^{0} )\\times {\\cal{B}} ( \\psi(2S) \\to \\chi_{c2} \\gamma ) $",
            "category": "Bd/cc",
            "average": 0.0047,
            "error": 0.0017888543819998333,
            "measurements": [
                {
                    "value": 0.0047,
                    "error": 0.0019595917942265427
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_pi+_etac",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\eta_c K^{-} \\pi^{+} ) $",
            "category": "Bd/cc",
            "average": 0.00571622912483121,
            "error": 0.0002729743925510667,
            "measurements": [
                {
                    "value": 0.005730000000000001,
                    "error": 0.0007259476565152614
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_chi1c",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\chi_{c1} \\bar{K}^{0} ) $",
            "category": "Bd/cc",
            "average": 0.0040352912721556946,
            "error": 0.00021960006309555225,
            "measurements": [
                {
                    "value": 0.0035,
                    "error": 0.0007681145747868608
                },
                {
                    "value": 0.00378,
                    "error": 0.0004950224464346331
                },
                {
                    "value": 0.004200000000000001,
                    "error": 0.0005196152422706631
                },
                {
                    "value": 0.00453,
                    "error": 0.0006754998149518622
                }
            ]
        },
        {
            "name": "BR_B0bar_KS0892bar_etac.-BR_B0bar_K0bar_etac",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to \\eta_c \\bar{K}^{*}(892)^{0} )}{{\\cal{B}} ( \\bar{B}^{0} \\to \\eta_c \\bar{K}^{0} )} $",
            "category": "Bd/cc",
            "average": 1.3299999999999998,
            "error": 0.4605361479860969,
            "measurements": [
                {
                    "value": 1.33,
                    "error": 0.5420895781028872
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_pi+_etac.-BR_B0bar_K-_pi+_Jpsi",
            "latex": "$ \\frac{ {\\cal{B}} ( \\bar{B}^{0} \\to \\eta_c K^{-} \\pi^{+} )}{ {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi K^{-} \\pi^{+} )} $",
            "category": "Bd/cc",
            "average": 0.357,
            "error": 0.016999999999999734,
            "measurements": [
                {
                    "value": 0.357,
                    "error": 0.018788294228055932
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_rho0_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\bar{K}^{0} \\rho(770)^{0} ) $",
            "category": "Bd/cc",
            "average": 0.0054,
            "error": 0.003036445290137796,
            "measurements": [
                {
                    "value": 0.0054,
                    "error": 0.0031670175244226232
                }
            ]
        },
        {
            "name": "BR_B0bar_KS0892bar_etac.-BR_B-_K-_etac",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to \\eta_c \\bar{K}^{*}(892)^{0} )}{{\\cal{B}} ( B^{-} \\to \\eta_c K^{-} )} $",
            "category": "Bd/cc",
            "average": 0.62,
            "error": 0.07810249675909917,
            "measurements": [
                {
                    "value": 0.62,
                    "error": 0.09273618495495704
                }
            ]
        },
        {
            "name": "BR_B0bar_eta_Jpsi.BR_Bsbar_eta_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\eta )}  {{\\cal{B}} ( \\bar{B}_{s}^{0} \\to J/\\psi \\eta )} $",
            "category": "Bd/cc",
            "average": 0.18500000000000003,
            "error": 0.06263385665916137,
            "measurements": [
                {
                    "value": 0.18500000000000003,
                    "error": 0.06422616289332565
                }
            ]
        },
        {
            "name": "BR_B0bar_eta_KS0_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\eta K_S^{0} ) $",
            "category": "Bd/cc",
            "average": 0.0005401107494048514,
            "error": 8.945287294867215e-05,
            "measurements": [
                {
                    "value": 0.000522,
                    "error": 0.00010433599570617995
                },
                {
                    "value": 0.00084,
                    "error": 0.0004623851208678757
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_pi+_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi K^{-} \\pi^{+}  ) $",
            "category": "Bd/cc",
            "average": 0.0115,
            "error": 0.0005099019513592786,
            "measurements": [
                {
                    "value": 0.0115,
                    "error": 0.000714142842854285
                }
            ]
        },
        {
            "name": "BR_B0bar_KS0892bar_chi1c.-BR_B0bar_K0bar_chi1c",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to \\chi_{c1} \\bar{K}^{*}(892)^{0} )}{{\\cal{B}} ( \\bar{B}^{0} \\to \\chi_{c1} \\bar{K}^{0} )} $",
            "category": "Bd/cc",
            "average": 0.72,
            "error": 0.16278820595953256,
            "measurements": [
                {
                    "value": 0.72,
                    "error": 0.2022374841615668
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_pi+_chi2c",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\chi_{c2} K^{-} \\pi^{+} ) $",
            "category": "Bd/cc",
            "average": 0.0007199999999999999,
            "error": 0.00010295630140987001,
            "measurements": [
                {
                    "value": 0.0007199999999999999,
                    "error": 0.00011445523142259596
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_chi2c",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\chi_{c2} \\bar{K}^{0} ) $",
            "category": "Bd/cc",
            "average": 0.00015000000000000001,
            "error": 9.48683298050514e-05,
            "measurements": [
                {
                    "value": 0.00015000000000000001,
                    "error": 9.949874371066201e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_pi+_pi-_Jpsi.-BR_B0bar_K0bar_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\bar{K}^{0} \\pi^{-} \\pi^{+} )}{{\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\bar{K}^{0} )} $",
            "category": "Bd/cc",
            "average": 0.493,
            "error": 0.04341658669218847,
            "measurements": [
                {
                    "value": 0.493,
                    "error": 0.05112729212465686
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_etac.-BR_B-_K-_etac",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to \\eta_c \\bar{K}^{0} )}{{\\cal{B}} ( B^{-} \\to \\eta_c K^{-} )} $",
            "category": "Bd/cc",
            "average": 0.87,
            "error": 0.1476482306037121,
            "measurements": [
                {
                    "value": 0.87,
                    "error": 0.16340134638368192
                }
            ]
        },
        {
            "name": "BR_B0bar_K0_K_K_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi K^{0} K^{+} K^{-} ) $",
            "category": "Bd/cc",
            "average": 0.00020199410420537864,
            "error": 4.623851212017049e-05,
            "measurements": [
                {
                    "value": 0.000202,
                    "error": 4.990991885387112e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_pi0_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\pi^{0} ) $",
            "category": "Bd/cc",
            "average": 0.0001783312722676505,
            "error": 1.3222006939479478e-05,
            "measurements": [
                {
                    "value": 0.00023,
                    "error": 5.744562646538029e-05
                },
                {
                    "value": 0.00016900000000000002,
                    "error": 1.714642819948225e-05
                },
                {
                    "value": 0.000194,
                    "error": 3.258834147360065e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_KS0892bar_chi2c",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\chi_{c2} \\bar{K}^{*}(892)^{0} ) $",
            "category": "Bd/cc",
            "average": 0.00066,
            "error": 0.0001868154169226941,
            "measurements": [
                {
                    "value": 0.00066,
                    "error": 0.0001933907960581372
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_etac",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\eta_c \\bar{K}^{0} ) $",
            "category": "Bd/cc",
            "average": 0.009911871384778769,
            "error": 0.0012936297687674435,
            "measurements": [
                {
                    "value": 0.0123,
                    "error": 0.004869987401716651
                },
                {
                    "value": 0.0064,
                    "error": 0.0035463352151482645
                },
                {
                    "value": 0.0114,
                    "error": 0.003920459156782532
                }
            ]
        },
        {
            "name": "BR_B0bar_eta_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\eta ) $",
            "category": "Bd/cc",
            "average": 0.00010953148005764276,
            "error": 1.2810795477979033e-05,
            "measurements": [
                {
                    "value": 9.6e-05,
                    "error": 1.9672315572906e-05
                },
                {
                    "value": 0.000123,
                    "error": 2.0107477078540067e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_omega_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\omega(782) \\bar{K}^{0} ) $",
            "category": "Bd/cc",
            "average": 0.0023,
            "error": 0.00042426406871192855,
            "measurements": [
                {
                    "value": 0.0023,
                    "error": 0.0005196152422706631
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_psi2S.BR_psi2S_pi+_pi-_Jpsi.-BR_B0bar_K0bar_Jpsi",
            "latex": "$ \\frac{   {\\cal{B}}  ( \\bar{B}^{0} \\to \\psi(2S) \\bar{K}^{0} ) \\times {\\cal{B}}( \\psi(2S)\\to  J/\\psi \\pi^{-} \\pi^{+})   } { {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\bar{K}^{0} )} $",
            "category": "Bd/cc",
            "average": 0.183,
            "error": 0.030886890422960205,
            "measurements": [
                {
                    "value": 0.183,
                    "error": 0.03433656942677879
                }
            ]
        },
        {
            "name": "BR_B0bar_K_K_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi K^{+} K^{-} ) $",
            "category": "Bd/cc",
            "average": 2.5300000000000002e-05,
            "error": 3.6359317925395777e-06,
            "measurements": [
                {
                    "value": 2.5300000000000002e-05,
                    "error": 4.102438299353204e-06
                }
            ]
        },
        {
            "name": "BR_B0bar_Jpsi_f11285",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi f_1(1285) ) $",
            "category": "Bd/cc",
            "average": 8.37e-05,
            "error": 2.0669652729837352e-05,
            "measurements": [
                {
                    "value": 8.37e-05,
                    "error": 2.2055518244557563e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_KS0892bar_pi-_pi+_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\bar{K}^{*}(892)^{0} \\pi^{+} \\pi^{-} ) $",
            "category": "Bd/cc",
            "average": 0.006599999999999999,
            "error": 0.0021954498400100155,
            "measurements": [
                {
                    "value": 0.0066,
                    "error": 0.0024556058315617353
                }
            ]
        },
        {
            "name": "BR_B0bar_KS0892bar_chi0c",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\chi_{c0} \\bar{K}^{*}(892)^{0} ) $",
            "category": "Bd/cc",
            "average": 0.0017,
            "error": 0.00036055512754639893,
            "measurements": [
                {
                    "value": 0.0017,
                    "error": 0.000412310562561766
                }
            ]
        },
        {
            "name": "BR_B0bar_KS-_pi+_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi K^{*}(892)^{-} \\pi^{+} ) $",
            "category": "Bd/cc",
            "average": 0.007700000000000001,
            "error": 0.004301162633521312,
            "measurements": [
                {
                    "value": 0.0077,
                    "error": 0.004493328387732193
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_pi+_pi0_chi1c",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\chi_{c1} K^{-} \\pi^{+}  \\pi^{0} ) $",
            "category": "Bd/cc",
            "average": 0.00352,
            "error": 0.0005727128425310541,
            "measurements": [
                {
                    "value": 0.00352,
                    "error": 0.0006209669878504009
                }
            ]
        },
        {
            "name": "BR_B0bar_KS0892bar_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\bar{K}^{*}(892)^{0} ) $",
            "category": "Bd/cc",
            "average": 0.012740693824855218,
            "error": 0.0005118115579782403,
            "measurements": [
                {
                    "value": 0.011899999999999999,
                    "error": 0.0011357816691600546
                },
                {
                    "value": 0.0129,
                    "error": 0.0019157244060668019
                },
                {
                    "value": 0.0174,
                    "error": 0.003237282811247729
                },
                {
                    "value": 0.013090000000000001,
                    "error": 0.0011005453193758082
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_K-_pi+_Lambdac+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\Lambda_c^{+} \\bar{p} K^{-} \\pi^{+} ) $",
            "category": "Bd/baryon",
            "average": 0.000433,
            "error": 0.00014346428126889283,
            "measurements": [
                {
                    "value": 0.000433,
                    "error": 0.00018558017135459273
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_pi-_SigmaSc++",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\Sigma_c^{*++} \\bar{p} \\pi^{-} ) $",
            "category": "Bd/baryon",
            "average": 0.0012162551334494766,
            "error": 0.00023028382770126217,
            "measurements": [
                {
                    "value": 0.0012,
                    "error": 0.0005196152422706631
                },
                {
                    "value": 0.00163,
                    "error": 0.0008954175982749683
                },
                {
                    "value": 0.00115,
                    "error": 0.00044158804331639233
                }
            ]
        },
        {
            "name": "BR_B0bar_Lambda0bar_K-_Lambdac+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\Lambda_c^{+} \\bar{\\Lambda} K^{-} ) $",
            "category": "Bd/baryon",
            "average": 0.00038,
            "error": 0.0001296148139681572,
            "measurements": [
                {
                    "value": 0.00038,
                    "error": 0.00016492422502470644
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_pi0_Lambdac+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\Lambda_c^{+} \\bar{p} \\pi^{0} ) $",
            "category": "Bd/baryon",
            "average": 0.0019399999999999999,
            "error": 0.0005463515351859091,
            "measurements": [
                {
                    "value": 0.0019399999999999999,
                    "error": 0.0007537240874484508
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_Lambdac+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\Lambda_c^{+} \\bar{p} ) $",
            "category": "Bd/baryon",
            "average": 0.0001977382173937261,
            "error": 4.500136950914137e-05,
            "measurements": [
                {
                    "value": 0.000219,
                    "error": 0.00010635560667688116
                },
                {
                    "value": 0.00018899999999999999,
                    "error": 7.290404652692468e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_Lambdac-_Xic+.BR_Xic+_pi+_pi+_Xi-",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to \\Xi_c^{+} \\Lambda_c^{-} )\\times {\\cal{B}} ( \\Xi_c^{+} \\to \\Xi^{-} \\pi^{+} \\pi^{+} )} $",
            "category": "Bd/baryon",
            "average": 0.00020622404475148325,
            "error": 0.00011138310048039768,
            "measurements": [
                {
                    "value": 0.0009300000000000002,
                    "error": 0.0005425156955910818
                },
                {
                    "value": 0.00015000000000000001,
                    "error": 0.00012365678307314968
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_pi-_Sigmac++",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\Sigma_c^{++} \\bar{p} \\pi^{-} ) $",
            "category": "Bd/baryon",
            "average": 0.002159223166390217,
            "error": 0.00038140415325160434,
            "measurements": [
                {
                    "value": 0.0021000000000000003,
                    "error": 0.000848528137423857
                },
                {
                    "value": 0.0023799999999999997,
                    "error": 0.001205950674719996
                },
                {
                    "value": 0.0021300000000000004,
                    "error": 0.0007968688725254614
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_pi-_pi+_Lambdac+_nonSigmac",
            "latex": "$ {\\cal{B}}( \\bar{B}^{0} \\to \\Lambda_c^{+} \\bar{p} \\pi^{+} \\pi^{-}_{\\rm{non}-\\Sigma_c} ) $",
            "category": "Bd/baryon",
            "average": 0.0079,
            "error": 0.0020784609690826534,
            "measurements": [
                {
                    "value": 0.0079,
                    "error": 0.0029120439557122073
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_pi+_SigmaSc0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\Sigma_c^{*0} \\bar{p} \\pi^{+} ) $",
            "category": "Bd/baryon",
            "average": 0.00022,
            "error": 9.273618495495706e-05,
            "measurements": [
                {
                    "value": 0.00022000000000000003,
                    "error": 0.00011090536506409417
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_pi+_Sigmac0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\Sigma_c^{0} \\bar{p} \\pi^{+} ) $",
            "category": "Bd/baryon",
            "average": 0.0010132851035832432,
            "error": 0.00022491914583636926,
            "measurements": [
                {
                    "value": 0.0014,
                    "error": 0.0006633249580710801
                },
                {
                    "value": 0.00091,
                    "error": 0.00035114099732158876
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_KS0892bar_Lambdac+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\Lambda_c^{+} \\bar{p} \\bar{K}^{*}(892)^{0} ) $",
            "category": "Bd/baryon",
            "average": 0.00016,
            "error": 7.502666192761078e-05,
            "measurements": [
                {
                    "value": 0.00016,
                    "error": 8.681589716175259e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_pi-_pi+_Lambdac+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\Lambda_c^{+} \\bar{p} \\pi^{+} \\pi^{-} ) $",
            "category": "Bd/baryon",
            "average": 0.011715957446808482,
            "error": 0.002459082500251769,
            "measurements": [
                {
                    "value": 0.011,
                    "error": 0.005047771785649585
                },
                {
                    "value": 0.0123,
                    "error": 0.004659399102888697
                }
            ]
        },
        {
            "name": "BR_B0bar_Lambdac-_K0bar_Lambdac+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\Lambda_c^{+} \\Lambda_c^{-} \\bar{K}^{0} ) $",
            "category": "Bd/baryon",
            "average": 0.005276187073212153,
            "error": 0.0029451010927707827,
            "measurements": [
                {
                    "value": 0.0079,
                    "error": 0.006583005457332098
                },
                {
                    "value": 0.0038,
                    "error": 0.004255584566190643
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_K-_K+_Lambdac+",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\Lambda_c^{+} \\bar{p} K^{+} K^{-} ) $",
            "category": "Bd/baryon",
            "average": 0.00025,
            "error": 7.483314773547885e-05,
            "measurements": [
                {
                    "value": 0.00025,
                    "error": 9.797958971132712e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_pbar_K-_Sigmac++",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to \\Sigma_c^{++} \\bar{p} K^{-} ) $",
            "category": "Bd/baryon",
            "average": 0.00011100000000000001,
            "error": 4.2684891940826075e-05,
            "measurements": [
                {
                    "value": 0.00011100000000000001,
                    "error": 5.238320341483518e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_Z14050.BR_Z14050_pi+_chi1c",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to Z_1(4050) K^{-} )\\times {\\cal{B}} ( Z_1(4050) \\to \\chi_{c1} \\pi^{+} )} $",
            "category": "Bd/other",
            "average": 0.00030000000000000003,
            "error": 0.0002889131594396183,
            "measurements": [
                {
                    "value": 0.00030000000000000003,
                    "error": 0.0003921672280051366
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_X3872.BR_X3872_omega_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to X(3872) \\bar{K}^{0} ) \\times {\\cal{B}} ( X(3872) \\to J/\\psi \\omega(782) ) $",
            "category": "Bd/other",
            "average": 6.000000000000001e-05,
            "error": 3.16227766016838e-05,
            "measurements": [
                {
                    "value": 6e-05,
                    "error": 3.3166247903554e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_X3872.BR_X3872_gamma_psi2S",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to X(3872) \\bar{K}^{0} )\\times {\\cal{B}} ( X(3872) \\to \\psi(2S) \\gamma )} $",
            "category": "Bd/other",
            "average": 6.946718152092858e-05,
            "error": 1.4458930049659651e-05,
            "measurements": [
                {
                    "value": 6.620000000000001e-05,
                    "error": 1.6743281418925217e-05
                },
                {
                    "value": 0.000114,
                    "error": 5.678908345800274e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_KS0892bar_X3872.BR_X3872_gamma_psi2S",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to X(3872) \\bar{K}^{*}(892)^{0} )\\times {\\cal{B}} ( X(3872) \\to \\psi(2S) \\gamma )} $",
            "category": "Bd/other",
            "average": -1.3000000000000001e-05,
            "error": 3.1144823004794874e-05,
            "measurements": [
                {
                    "value": -1.3000000000000001e-05,
                    "error": 3.128897569432403e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_Y3940.BR_Y3940_omega_Jpsi",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to Y(3940) \\bar{K}^{0} )\\times {\\cal{B}} ( Y(3940) \\to J/\\psi \\omega(782) )} $",
            "category": "Bd/other",
            "average": 0.00021,
            "error": 9.486832980505142e-05,
            "measurements": [
                {
                    "value": 0.00021,
                    "error": 9.949874371066201e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_X3872.-BR_B-_K-_X3872",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to X(3872) \\bar{K}^{0} )}{{\\cal{B}} ( B^{-} \\to X(3872) K^{-} )} $",
            "category": "Bd/other",
            "average": 0.4938874022024121,
            "error": 0.1798645278454894,
            "measurements": [
                {
                    "value": 0.5,
                    "error": 0.3082207001484488
                },
                {
                    "value": 0.41,
                    "error": 0.25019992006393604
                },
                {
                    "value": 1.0,
                    "error": 0.7378643992673382
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_Zc4200+.BR_Zc4200+_pi+_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to Z_c(4200)^{+} K^{-} ) \\times {\\cal{B}} ( Z_c(4200)^{+} \\to J/\\psi \\pi^{+} ) $",
            "category": "Bd/other",
            "average": 0.00022000000000000003,
            "error": 0.00010417993468961621,
            "measurements": [
                {
                    "value": 0.00022000000000000003,
                    "error": 0.00013453789955514045
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_Y3940.-BR_B-_K-_Y3940",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0} \\to Y(3940) \\bar{K}^{0} ) }{ {\\cal{B}} ( B^{-} \\to Y(3940) K^{-} )} $",
            "category": "Bd/other",
            "average": 0.7,
            "error": 0.364252308990485,
            "measurements": [
                {
                    "value": 0.7,
                    "error": 0.3779632738737343
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_Z4430+.BR_Z4430+_pi+_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to Z(4430)^{+} K^{-} ) \\times {\\cal{B}} ( Z(4430)^{+} \\to J/\\psi \\pi^{+} ) $",
            "category": "Bd/other",
            "average": 5.4000000000000005e-05,
            "error": 2.7464015099130462e-05,
            "measurements": [
                {
                    "value": 5.4000000000000005e-05,
                    "error": 2.955247076199426e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_X3872.BR_X3872_pi-_pi+_Jpsi",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to X(3872) \\bar{K}^{0} )\\times {\\cal{B}} ( X(3872) \\to J/\\psi \\pi^{+} \\pi^{-} )} $",
            "category": "Bd/other",
            "average": 3.998512396508617e-05,
            "error": 1.6110183628032474e-05,
            "measurements": [
                {
                    "value": 5.1e-05,
                    "error": 2.9698484809834997e-05
                },
                {
                    "value": 3.5000000000000004e-05,
                    "error": 1.982422760159901e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_Z4430+.BR_Z4430+_pi+_psi2S",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0} \\to Z(4430)^{+} K^{-} ) \\times {\\cal{B}} ( Z(4430)^{+} \\to \\psi(2S) \\pi^{+} ) $",
            "category": "Bd/other",
            "average": 0.00033696929286607813,
            "error": 0.0001258936951625474,
            "measurements": [
                {
                    "value": 0.00034,
                    "error": 0.00020612327086587352
                },
                {
                    "value": 0.00032,
                    "error": 0.0005071798034308945
                }
            ]
        },
        {
            "name": "BR_B0bar_KS0892bar_X3872.BR_X3872_gamma_Jpsi",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to X(3872) \\bar{K}^{*}(892)^{0} )\\times {\\cal{B}} ( X(3872) \\to J/\\psi \\gamma )} $",
            "category": "Bd/other",
            "average": 7e-06,
            "error": 1.4035668847618199e-05,
            "measurements": [
                {
                    "value": 7e-06,
                    "error": 1.4071247279470288e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_K0bar_X3872.BR_X3872_gamma_Jpsi",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to X(3872) \\bar{K}^{0} )\\times {\\cal{B}} ( X(3872) \\to J/\\psi \\gamma )} $",
            "category": "Bd/other",
            "average": 2.5172475424486152e-05,
            "error": 1.1638001817032511e-05,
            "measurements": [
                {
                    "value": 2.4e-05,
                    "error": 1.6743281418925217e-05
                },
                {
                    "value": 2.6000000000000002e-05,
                    "error": 1.8220867158288598e-05
                }
            ]
        },
        {
            "name": "BR_B0bar_K-_Z24250.BR_Z24250_pi+_chi1c",
            "latex": "$ {{\\cal{B}} ( \\bar{B}^{0} \\to Z_2(4250) K^{-} )\\times {\\cal{B}} ( Z_2(4250) \\to \\chi_{c1} \\pi^{+} )} $",
            "category": "Bd/other",
            "average": 0.0004,
            "error": 0.0010431533680840194,
            "measurements": [
                {
                    "value": 0.0004,
                    "error": 0.001454966861779748
                }
            ]
        },
        {
            "name": "BR_Bc-_D0bar_K-",
            "latex": "$ \\frac{ f_c \\times {\\cal B} ( B_c^{-} \\to  \\bar{D}^{0} K^{-} ) }{ f_u } $",
            "category": "Bc/D",
            "average": 9.3e-06,
            "error": 2.7173759187798002e-06,
            "measurements": [
                {
                    "value": 9.3e-06,
                    "error": 2.7829117620771877e-06
                }
            ]
        },
        {
            "name": "fc.BR_Bc-_DsS-_DS0.-fu.BR_B-_Ds-_D0",
            "latex": "$ \\frac{ f_c \\times  {\\cal{B}} ( B_c^- \\to D_s^{*-} D^{*0} ) } { f_u \\times {\\cal{B}} ( B^- \\to D_s^- D^0 ) } $",
            "category": "Bc/DD",
            "average": 0.032,
            "error": 0.042999999999995,
            "measurements": [
                {
                    "value": 0.032,
                    "error": 0.043
                }
            ]
        },
        {
            "name": "fc.BR_Bc-_D-_D0bar.-fu.BR_B-_D-_D0",
            "latex": "$ \\frac{ f_c \\times {\\cal{B}} ( B_c^- \\to D^- \\bar{D}^0 ) } { f_u \\times {\\cal{B}} ( B^- \\to D^- D^0 ) } $",
            "category": "Bc/DD",
            "average": 0.028999999999999995,
            "error": 0.053000000000011975,
            "measurements": [
                {
                    "value": 0.028999999999999998,
                    "error": 0.053
                }
            ]
        },
        {
            "name": "fc.BR_Bc-_DsS-_D0+BR_Bc-_Ds-_DS0.-fu.BR_B-_Ds-_D0",
            "latex": "$ \\frac{ f_c \\times ( {\\cal{B}} ( B_c^- \\to D_s^{*-} D^0 ) + {\\cal{B}} ( B_c^+ \\to D_s^- D^{*0} ) ) } { f_u \\times {\\cal{B}} ( B^- \\to D_s^- D^0 ) } $",
            "category": "Bc/DD",
            "average": -0.001,
            "error": 0.014999999999999913,
            "measurements": [
                {
                    "value": -0.001,
                    "error": 0.015
                }
            ]
        },
        {
            "name": "fc.BR_Bc-_DS-_DS0.-fu.BR_B-_D-_D0",
            "latex": "$ \\frac{ f_c \\times  {\\cal{B}} ( B_c^- \\to D_s^{*-} D^{*0} ) } { f_u \\times {\\cal{B}} ( B^- \\to D^- D^0 ) } $",
            "category": "Bc/DD",
            "average": 3.4,
            "error": 2.299999999644444,
            "measurements": [
                {
                    "value": 3.4,
                    "error": 2.3
                }
            ]
        },
        {
            "name": "fc.BR_Bc-_DsS-_D0bar+BR_Bc-_Ds-_DS0bar.-fu.BR_B-_Ds-_D0",
            "latex": "$ \\frac{ f_c \\times ( {\\cal{B}} ( B_c^- \\to D_s^{*-} \\bar{D}^0 ) + {\\cal{B}} ( B_c^+ \\to D_s^- \\bar{D}^{*0} ) ) } { f_u \\times {\\cal{B}} ( B^- \\to D_s^- D^0 ) } $",
            "category": "Bc/DD",
            "average": -0.003,
            "error": 0.01900000000000001,
            "measurements": [
                {
                    "value": -0.003,
                    "error": 0.019
                }
            ]
        },
        {
            "name": "fc.BR_Bc-_Ds-_D0.-fu.BR_B-_Ds-_D0",
            "latex": "$ \\frac{ f_c \\times {\\cal{B}} ( B_c^- \\to D_s^- D^0 ) } { f_u \\times {\\cal{B}} ( B^- \\to D_s^- D^0 ) } $",
            "category": "Bc/DD",
            "average": 0.003,
            "error": 0.0036999999999999997,
            "measurements": [
                {
                    "value": 0.003,
                    "error": 0.0037
                }
            ]
        },
        {
            "name": "fc.BR_Bc-_DS-_D0.BR_DS-_D-_pi0,gamma+BR_Bc-_Ds-_DS0.-fu.BR_B-_D-_D0",
            "latex": "$ \\frac{ f_c \\times  ( {\\cal{B}} ( B_c^- \\to D^{*-} D^0 ) \\times {\\cal{B}} (D^{*-}\\to D^- (\\pi^0,\\gamma)) + {\\cal{B}} (B_c^{-}\\to D^- D^{*0}) } { f_u \\times {\\cal{B}} ( B^- \\to D^- D^0 ) } $",
            "category": "Bc/DD",
            "average": 0.020000000000000004,
            "error": 0.3200000000590165,
            "measurements": [
                {
                    "value": 0.020000000000000004,
                    "error": 0.32000000000000006
                }
            ]
        },
        {
            "name": "fc.BR_Bc-_DS-_DS0bar.-fu.BR_B-_D-_D0",
            "latex": "$ \\frac{ f_c \\times  {\\cal{B}} ( B_c^- \\to D_s^{*-} \\bar{D}^{*0} ) } { f_u \\times {\\cal{B}} ( B^- \\to D^- D^0 ) } $",
            "category": "Bc/DD",
            "average": -0.41,
            "error": 0.9099999999351677,
            "measurements": [
                {
                    "value": -0.41,
                    "error": 0.91
                }
            ]
        },
        {
            "name": "fc.BR_Bc-_Ds-_D0bar.-fu.BR_B-_Ds-_D0",
            "latex": "$ \\frac{ f_c \\times {\\cal{B}} ( B_c^- \\to D_s^- \\bar{D}^0 ) } { f_u \\times {\\cal{B}} ( B^- \\to D_s^- D^0 ) } $",
            "category": "Bc/DD",
            "average": -0.0038,
            "error": 0.0025999999999999994,
            "measurements": [
                {
                    "value": -0.0038,
                    "error": 0.0026000000000000003
                }
            ]
        },
        {
            "name": "fc.BR_Bc-_DsS-_DS0bar.-fu.BR_B-_Ds-_D0",
            "latex": "$ \\frac{ f_c \\times  {\\cal{B}} ( B_c^- \\to D_s^{*-} \\bar{D}^{*0} ) } { f_u \\times {\\cal{B}} ( B^- \\to D_s^- D^0 ) } $",
            "category": "Bc/DD",
            "average": 0.07,
            "error": 0.09200000000008113,
            "measurements": [
                {
                    "value": 0.07,
                    "error": 0.092
                }
            ]
        },
        {
            "name": "fc.BR_Bc-_D-_D0.-fu.BR_B-_D-_D0",
            "latex": "$ \\frac{ f_c \\times {\\cal{B}} ( B_c^- \\to D^- D^0 ) } { f_u \\times {\\cal{B}} ( B^- \\to D^- D^0 ) } $",
            "category": "Bc/DD",
            "average": 0.08,
            "error": 0.07500000000002967,
            "measurements": [
                {
                    "value": 0.08,
                    "error": 0.075
                }
            ]
        },
        {
            "name": "fc.BR_Bc-_DS-_D0bar.BR_DS-_D-_pi0,gamma+BR_Bc-_Ds-_DS0bar.-fu.BR_B-_D-_D0",
            "latex": "$ \\frac{ f_c \\times  ( {\\cal{B}} ( B_c^- \\to D^{*-} \\bar{D}^0 ) \\times {\\cal{B}} (D^{*-}\\to D^- (\\pi^0,\\gamma)) + {\\cal{B}} (B_c^{-}\\to D^- \\bar{D}^{*0}) } { f_u \\times {\\cal{B}} ( B^- \\to D^- D^0 ) } $",
            "category": "Bc/DD",
            "average": -0.15000000000000002,
            "error": 0.1699999999980017,
            "measurements": [
                {
                    "value": -0.15000000000000002,
                    "error": 0.17
                }
            ]
        },
        {
            "name": "BR_Bc-_Jpsi_DSs-.-BR_Bc-_Jpsi_pi-",
            "latex": "$ \\frac {{\\cal{B}} (B_c^{-} \\to J/\\psi D_s^{*-})} {{\\cal{B}} (B_c^{-} \\to J/\\psi \\pi^{-})} $",
            "category": "Bc/cc",
            "average": 10.4,
            "error": 3.4957116577488523,
            "measurements": [
                {
                    "value": 10.4,
                    "error": 3.8509739027939416
                }
            ]
        },
        {
            "name": "BR_Bc-_Jpsi_D-_KS0892bar.-BR_Bc-_Jpsi_D0bar_K-",
            "latex": "$ \\frac {{\\cal{B}} (B_c^{-} \\to J/\\psi D^{-} \\bar{K}^{*0}) } {{\\cal{B}} (B_c^{-} \\to J/\\psi \\bar{D}^0 K^-)} $",
            "category": "Bc/cc",
            "average": 6.3,
            "error": 3.9812058473753393,
            "measurements": [
                {
                    "value": 6.3,
                    "error": 4.060788100849391
                }
            ]
        },
        {
            "name": "BR_Bc-_Jpsi_DS0bar_K-.-BR_Bc-_Jpsi_D0bar_K-",
            "latex": "$ \\frac {{\\cal{B}} (B_c^{-} \\to J/\\psi \\bar{D}^{*0} K^- ) } {{\\cal{B}} (B_c^{-} \\to J/\\psi \\bar{D}^0 K^-)} $",
            "category": "Bc/cc",
            "average": 5.1,
            "error": 1.8439088914105533,
            "measurements": [
                {
                    "value": 5.1,
                    "error": 1.886796226411321
                }
            ]
        },
        {
            "name": "BR_Bc-_pi-_psi2S.BR_Bc-_pi-_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( B_c^{-} \\to \\psi(2S) \\pi^{-} ) }  {{\\cal{B}} ( B_c^{-} \\to J/\\psi \\pi^{-} ) } $",
            "category": "Bc/cc",
            "average": 0.2682084061123551,
            "error": 0.0328220305397867,
            "measurements": [
                {
                    "value": 0.268,
                    "error": 0.03402939905434711
                }
            ]
        },
        {
            "name": "BR_Bc-_Ds-_Jpsi.BR_Bc-_pi-_Jspi",
            "latex": "$ \\frac {{\\cal{B}} (B_c^{-} \\to J/\\psi D_s^{-})} {{\\cal{B}} (B_c^{-} \\to J/\\psi \\pi^{-})} $",
            "category": "Bc/cc",
            "average": 3.092050209107045,
            "error": 0.548524075119403,
            "measurements": [
                {
                    "value": 2.9,
                    "error": 0.6634003316248793
                },
                {
                    "value": 3.8,
                    "error": 1.268857754044952
                }
            ]
        },
        {
            "name": "BR_Bc-_Jpsi_DSs-.-BR_Bc-_Jpsi_Ds-",
            "latex": "$ \\frac {{\\cal{B}} (B_c^{-} \\to J/\\psi D_s^{*-})} {{\\cal{B}} (B_c^{-} \\to J/\\psi D_s^{-})} $",
            "category": "Bc/cc",
            "average": 2.8,
            "error": 1.0455152422457044,
            "measurements": [
                {
                    "value": 2.8,
                    "error": 1.0891653599747637
                }
            ]
        },
        {
            "name": "sigma_Bc-.-sigma_B-.BR_Bc-_chic0_pi-",
            "latex": "$ {\\frac{f_c}{f_u}} \\times {\\cal{B}} ( B_c^{-} \\to \\chi_{c0} \\pi^{-} ) $",
            "category": "Bc/cc",
            "average": 9.800000000000001e-05,
            "error": 3.2989960300244873e-05,
            "measurements": [
                {
                    "value": 9.800000000000001e-05,
                    "error": 3.3947692409050315e-05
                }
            ]
        },
        {
            "name": "BR_Bc-_K-_Jpsi.BR_Bc-_pi-_Jpsi",
            "latex": "$ \\frac{{\\cal{B}}( B_c^{-} \\to J/\\psi K^{-})} { {\\cal{B}}( B_c^{-} \\to J/\\psi \\pi^{-})} $",
            "category": "Bc/cc",
            "average": 0.069,
            "error": 0.01964688270438792,
            "measurements": [
                {
                    "value": 0.069,
                    "error": 0.02027313493271329
                }
            ]
        },
        {
            "name": "BR_Bc-_K-_K+_pi-_Jpsi.BR_Bc-_pi-_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( B_c^{-} \\to J/\\psi K^{-} K^{+} \\pi^{-} )} { {\\cal{B}} ( B_c^{-} \\to J/\\psi \\pi^{-} )} $",
            "category": "Bc/cc",
            "average": 0.53,
            "error": 0.11180339887499159,
            "measurements": [
                {
                    "value": 0.53,
                    "error": 0.12247448713915891
                }
            ]
        },
        {
            "name": "sigma_Bc-.BR_Bc-_pi-_Jpsi.-sigma_B-.-BR_B-_K-_Jpsi",
            "latex": "$ \\frac{{f_c \\times \\cal{B}} ( B_c^{-} \\to J/\\psi \\pi^{-} )}  {f_u \\times {\\cal{B}} ( B^{-} \\to J/\\psi K^{-} )} $",
            "category": "Bc/cc",
            "average": 0.06652951108102867,
            "error": 0.0018887082399077421,
            "measurements": [
                {
                    "value": 0.068,
                    "error": 0.0119582607431014
                },
                {
                    "value": 0.06830000000000001,
                    "error": 0.00220454076850486
                },
                {
                    "value": 0.048,
                    "error": 0.009055385138137417
                }
            ]
        },
        {
            "name": "BR_Bc-_Jpsi_D0bar_K-.-BR_Bc-_Jpsi_pi-",
            "latex": "$ \\frac {{\\cal{B}} (B_c^{-} \\to J/\\psi \\bar{D}^0 K^- )} {{\\cal{B}} (B_c^{-} \\to J/\\psi \\pi^-)} $",
            "category": "Bc/cc",
            "average": 4.319999999999999,
            "error": 1.3885243962994656,
            "measurements": [
                {
                    "value": 4.32,
                    "error": 1.416474496770062
                }
            ]
        },
        {
            "name": "BR_Bc-_Jpsi_DS-_KS0892bar.-BR_Bc-_Jpsi_D0bar_K-",
            "latex": "$ \\frac {{\\cal{B}} (B_c^{-} \\to J/\\psi D^{*-} \\bar{K}^{*0} ) } {{\\cal{B}} (B_c^{-} \\to J/\\psi \\bar{D}^0 K^-)} $",
            "category": "Bc/cc",
            "average": 2.1,
            "error": 1.1322543880147715,
            "measurements": [
                {
                    "value": 2.1,
                    "error": 1.182201336490532
                }
            ]
        },
        {
            "name": "BR_Bc-_pi+_pi-_pi-_Jpsi.-BR_Bc-_pi-_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( B_c^{-} \\to J/\\psi \\pi^{+} \\pi^{-} \\pi^{-} )} {{\\cal{B}} ( B_c^{-} \\to J/\\psi \\pi^{-} )} $",
            "category": "Bc/cc",
            "average": 2.4414396886418275,
            "error": 0.3973662279511226,
            "measurements": [
                {
                    "value": 2.41,
                    "error": 0.5547972602672079
                },
                {
                    "value": 2.55,
                    "error": 0.9270382947861432
                }
            ]
        },
        {
            "name": "BR_Bc+_Bs_pi+",
            "latex": "$ \\frac{f_c}{f_s}  \\times {\\cal B} ( B_c^{+} \\to  B_s^{0}\\pi^{+} ) $",
            "category": "Bc/B",
            "average": 0.023700000000000002,
            "error": 0.0036169794090880054,
            "measurements": [
                {
                    "value": 0.023700000000000002,
                    "error": 0.004072873427239972
                }
            ]
        },
        {
            "name": "BR_Bsbar_K0_D0",
            "latex": "$ {\\cal{B}} ( \\bar{B}_s^{0} \\to D^{0} K^{0} ) $",
            "category": "Bs/D",
            "average": 0.0042959402696898545,
            "error": 0.0005825636056098478,
            "measurements": [
                {
                    "value": 0.0043,
                    "error": 0.0007681145747868608
                }
            ]
        },
        {
            "name": "BR_Bsbar_pi-_pi-_pi+_Ds+.-BR_B0bar_pi-_pi-_pi+_D+",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}_s^{0} \\to D_s^{+} \\pi^{+} \\pi^{-} \\pi^{-} )}{{\\cal{B}} ( \\bar{B}^{0} \\to D^{+} \\pi^{+} \\pi^{-} \\pi^{-} )} $",
            "category": "Bs/D",
            "average": 1.05,
            "error": 0.24166091949494328,
            "measurements": [
                {
                    "value": 1.05,
                    "error": 0.32680269276736384
                }
            ]
        },
        {
            "name": "BR_Bsbar_D0_K+_pi-.-BR_B0bar_D0_pi-_pi+",
            "latex": "$ \\frac{ {\\cal{B}} ( \\bar{B}_s^{0} \\to D^{0} K^{+} \\pi^{-} )}  {{\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\pi^{-} \\pi^{+} )} $",
            "category": "Bs/D",
            "average": 1.18,
            "error": 0.12999999999921655,
            "measurements": [
                {
                    "value": 1.18,
                    "error": 0.17691806012954134
                }
            ]
        },
        {
            "name": "BR_Bsbar_K0_D0S",
            "latex": "$ {\\cal{B}} ( \\bar{B}_s^{0} \\to D^{*0} K^{0} ) $",
            "category": "Bs/D",
            "average": 0.0027986783981361796,
            "error": 0.0010435525172583582,
            "measurements": [
                {
                    "value": 0.0028,
                    "error": 0.0011045361017187263
                }
            ]
        },
        {
            "name": "BR_Bsbar_rho-_Ds+",
            "latex": "$ {\\cal{B}} ( \\bar{B}_s^{0} \\to D_s^{+} \\rho^{-}(770) ) $",
            "category": "Bs/D",
            "average": 0.0850045103958877,
            "error": 0.016687583749791512,
            "measurements": [
                {
                    "value": 0.085,
                    "error": 0.023820813568182046
                }
            ]
        },
        {
            "name": "BR_Bsbar_D1S+_pi-.-BR_D1S+_Ds+_pi-_pi+.BR_Bsbar_Ds_pi-_pi+_pi-",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}_s^{0} \\to D_{s1}^{+} \\pi^{-} ) \\times {\\cal{B}}(D_{s1}^{+} \\to  D_s^{+} \\pi^{-}  \\pi^{+})  }{{\\cal{B}} ( \\bar{B}^{0} \\to D_s^{+} \\pi^{-}  \\pi^{+}  \\pi^{-} )} $",
            "category": "Bs/D",
            "average": 0.04,
            "error": 0.010770329614268966,
            "measurements": [
                {
                    "value": 0.04,
                    "error": 0.011489125293076056
                }
            ]
        },
        {
            "name": "BR_Bsbar_KS0892_D0.-BR_B0bar_KS0892bar_D0",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0}_s \\to D^{0} K^{*0} ) }{ {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\bar{K}^{*0} )} $",
            "category": "Bs/D",
            "average": 7.800000000000001,
            "error": 0.9695359714355897,
            "measurements": [
                {
                    "value": 7.8,
                    "error": 1.1789826122551597
                }
            ]
        },
        {
            "name": "BR_Bsbar_phi_DS0.BR_Bsbar_phi_D0",
            "latex": "$ \\frac{ {\\cal{B}} ( \\bar{B}^{0}_s \\to D^{*}(2007)^{0} \\phi(1020) ) }{  {\\cal{B}} ( \\bar{B}^{0}_s \\to D^{0} \\phi(1020) )} $",
            "category": "Bs/D",
            "average": 1.23,
            "error": 0.20880613018261548,
            "measurements": [
                {
                    "value": 1.23,
                    "error": 0.21725560982400433
                }
            ]
        },
        {
            "name": "BR_Bsbar_Ds+_K-_pi+_pi-.BR_Bsbar_Ds_pi-_pi+_pi-",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}_s^{0} \\to D_s^{+} K^{-}  \\pi^{+}  \\pi^{-} )}{{\\cal{B}} ( \\bar{B}^{0} \\to D_s^{+} \\pi^{-}  \\pi^{+}  \\pi^{-} )} $",
            "category": "Bs/D",
            "average": 0.52,
            "error": 0.05830951894845492,
            "measurements": [
                {
                    "value": 0.52,
                    "error": 0.06557438524302
                }
            ]
        },
        {
            "name": "BR_Bsbar_DSs+_K-",
            "latex": "$ {\\cal{B}} ( \\bar{B}_s^{0} \\to D_s^{*+} K^{-} ) $",
            "category": "Bs/D",
            "average": 0.0016272965718497508,
            "error": 0.00013423831169758691,
            "measurements": [
                {
                    "value": 0.0016300000000000002,
                    "error": 0.0005021894962228533
                }
            ]
        },
        {
            "name": "BR_Bsbar_phi_DS0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0}_s \\to D^{*}(2007)^{0} \\phi(1020) ) $",
            "category": "Bs/D",
            "average": 0.0003699730029246398,
            "error": 5.8309519502388834e-05,
            "measurements": [
                {
                    "value": 0.00037000000000000005,
                    "error": 6.855654600401044e-05
                }
            ]
        },
        {
            "name": "BR_Bsbar_K-_Ds+",
            "latex": "$ {\\cal{B}} ( \\bar{B}_s^{0} \\to D_s^{+} K^{-} ) $",
            "category": "Bs/D",
            "average": 0.0019378575092293708,
            "error": 0.0001702319380974714,
            "measurements": [
                {
                    "value": 0.0019,
                    "error": 0.0002865618242460609
                },
                {
                    "value": 0.00197,
                    "error": 0.0003613776384358661
                },
                {
                    "value": 0.0024,
                    "error": 0.0012173062250103333
                }
            ]
        },
        {
            "name": "BR_Bsbar_pi-_Ds+.-BR_B0bar_pi-_D+",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}_s^{0} \\to D_s^{+} \\pi^{-} )}{{\\cal{B}} ( \\bar{B}^{0} \\to D^{+} \\pi^{-} )} $",
            "category": "Bs/D",
            "average": 1.13,
            "error": 0.2797173529227528,
            "measurements": [
                {
                    "value": 1.13,
                    "error": 0.25059928172283336
                }
            ]
        },
        {
            "name": "BR_Bsbar_pi-_pi-_pi+_Ds+.-BR_Bsbar_pi-_Ds+",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0}_s \\to D_s^{+} \\pi^{+} \\pi^{-} \\pi^{-} ) }{ {\\cal{B}} ( \\bar{B}^{0}_s \\to D_s^{+} \\pi^{-} )} $",
            "category": "Bs/D",
            "average": 2.01,
            "error": 0.42059481688667094,
            "measurements": [
                {
                    "value": 2.01,
                    "error": 0.4657252408878007
                }
            ]
        },
        {
            "name": "BR_Bsbar_pi-_Ds+",
            "latex": "$ {\\cal{B}} ( \\bar{B}_s^{0} \\to D_s^{+} \\pi^{-} ) $",
            "category": "Bs/D",
            "average": 0.030710710043461736,
            "error": 0.0018797216249423275,
            "measurements": [
                {
                    "value": 0.029500000000000002,
                    "error": 0.0037502660366433805
                },
                {
                    "value": 0.0304,
                    "error": 0.004470370838605844
                },
                {
                    "value": 0.0367,
                    "error": 0.008467693787292084
                }
            ]
        },
        {
            "name": "BR_Bsbar_phi_DS0.BR_B0bar_pi+_pi-_D0",
            "latex": "$ \\frac{ {\\cal{B}} ( \\bar{B}^{0}_s \\to D^{*}(2007)^{0} \\phi(1020) ) }{  {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\pi^+ \\pi^-) )} $",
            "category": "Bs/D",
            "average": 0.42000000000000004,
            "error": 0.06403124237434576,
            "measurements": [
                {
                    "value": 0.42000000000000004,
                    "error": 0.07549834435270751
                }
            ]
        },
        {
            "name": "BR_Bsbar_DSs+_rho-",
            "latex": "$ {\\cal{B}} ( \\bar{B}_s^{0} \\to D_s^{*+} \\rho^{-}(770) ) $",
            "category": "Bs/D",
            "average": 0.11800939101429893,
            "error": 0.02710085495157326,
            "measurements": [
                {
                    "value": 0.11800000000000001,
                    "error": 0.03665612902165501
                }
            ]
        },
        {
            "name": "BR_Bsbar_phi_D0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0}_s \\to D^{0} \\phi(1020) ) $",
            "category": "Bs/D",
            "average": 0.00029997811047880905,
            "error": 3.6055513343572626e-05,
            "measurements": [
                {
                    "value": 0.00030000000000000003,
                    "error": 4.58257569495584e-05
                }
            ]
        },
        {
            "name": "BR_Bsbar_KS0892_D0",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0}_s \\to D^{0} K^{*0} ) $",
            "category": "Bs/D",
            "average": 0.004713635378317306,
            "error": 0.0011727332945670466,
            "measurements": [
                {
                    "value": 0.00472,
                    "error": 0.001320075755401939
                }
            ]
        },
        {
            "name": "BR_Bsbar_phi_D0.BR_B0bar_pi+_pi-_D0",
            "latex": "$ \\frac{ {\\cal{B}} ( \\bar{B}^{0}_s \\to D^{0} \\phi(1020) ) }{  {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\pi^+ \\pi^- )} $",
            "category": "Bs/D",
            "average": 0.34,
            "error": 0.044721359549994365,
            "measurements": [
                {
                    "value": 0.34,
                    "error": 0.04898979485566357
                }
            ]
        },
        {
            "name": "BR_Bsbar_pi-_DSs+",
            "latex": "$ {\\cal{B}} ( \\bar{B}_s^{0} \\to D_s^{*+} \\pi^{-} ) $",
            "category": "Bs/D",
            "average": 0.02400574283408749,
            "error": 0.005416449872280222,
            "measurements": [
                {
                    "value": 0.024,
                    "error": 0.0068842705376149895
                }
            ]
        },
        {
            "name": "longitudinal_polarb_BR_Bsbar_phi_DS0",
            "latex": "$ {|{\\cal{A}}_0|^2} ( \\bar{B}^{0}_s \\to D^{*}(2007)^{0} \\phi(1020) ) $",
            "category": "Bs/D",
            "average": 7.300000000000001,
            "error": 1.5297058540141977,
            "measurements": [
                {
                    "value": 7.300000000000001,
                    "error": 1.5588457268119895
                }
            ]
        },
        {
            "name": "BR_Bsbar_DSs+_K-.-BR_Bsbar_DSs+_pi-",
            "latex": "$ \\frac{  {\\cal{B}} ( \\bar{B}_s^{0} \\to D_s^{*+} K^{-} )}{    {\\cal{B}} ( \\bar{B}_s^{0} \\to D_s^{*+} \\pi^{-} ) } $",
            "category": "Bs/D",
            "average": 0.068,
            "error": 0.005594782149609384,
            "measurements": [
                {
                    "value": 0.068,
                    "error": 0.006151000585420015
                }
            ]
        },
        {
            "name": "BR_Bsbar_D0_K-_K+",
            "latex": "$ {\\cal{B}} ( \\bar{B}_s^{0} \\to D^{0} K^{+} K^{-} ) $",
            "category": "Bs/D",
            "average": 0.0005698902765882432,
            "error": 6.402391248751737e-05,
            "measurements": [
                {
                    "value": 0.0005700000000000001,
                    "error": 9.055385138137417e-05
                }
            ]
        },
        {
            "name": "BR_Bsbar_KS0892_D0.-BR_B0bar_rho0_D0",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0}_s \\to D^{0} K^{*0} ) }{ {\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\rho^{0} )} $",
            "category": "Bs/D",
            "average": 1.48,
            "error": 0.3905124838196984,
            "measurements": [
                {
                    "value": 1.48,
                    "error": 0.43520110293977887
                }
            ]
        },
        {
            "name": "BR_Bsbar_D0_K-_K+.BR_B0bar_D0_pi-_pi+",
            "latex": "$ \\frac{ {\\cal{B}} ( \\bar{B}_s^{0} \\to D^{0} K^{+} K^{-} )}  {{\\cal{B}} ( \\bar{B}^{0} \\to D^{0} \\pi^{+} \\pi^{-} )} $",
            "category": "Bs/D",
            "average": 9.3,
            "error": 1.1261438627671327,
            "measurements": [
                {
                    "value": 9.3,
                    "error": 1.3207195008782147
                }
            ]
        },
        {
            "name": "BR_Bsbar_phi_D0.BR_Bsbar_KS0892_D0",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0}_s \\to D^{0} \\phi(1020) ) }{ {\\cal{B}} ( \\bar{B}^{0}_s \\to D^{0} K^{*0} )} $",
            "category": "Bs/D",
            "average": 0.069,
            "error": 0.0147648230602334,
            "measurements": [
                {
                    "value": 0.069,
                    "error": 0.01634013463836819
                }
            ]
        },
        {
            "name": "BR_Bsbar_K-_Ds+.-BR_Bsbar_pi-_Ds+",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}_s^{0} \\to D_s^{+} K^{-} )}{{\\cal{B}} ( \\bar{B}_s^{0} \\to D_s^{+} \\pi^{-} )} $",
            "category": "Bs/D",
            "average": 0.0755109282967434,
            "error": 0.0024034184387648817,
            "measurements": [
                {
                    "value": 0.0752,
                    "error": 0.003077336510685824
                },
                {
                    "value": 0.097,
                    "error": 0.022045407685048604
                }
            ]
        },
        {
            "name": "BR_Bsbar_D0_D0bar.-BR_Bu_D0_Ds-",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0}_s \\to \\bar{D}^{0} D^{0} )}{{\\cal{B}} ( B^{-} \\to D^{0} D_s^{-} )} $",
            "category": "Bs/DD",
            "average": 0.019,
            "error": 0.004242640687119286,
            "measurements": [
                {
                    "value": 0.019,
                    "error": 0.005196152422706632
                }
            ]
        },
        {
            "name": "BR_Bsbar_Ds-_Ds+.-BR_B0bar_Ds-_D+",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}_s^{0} \\to D_s^{-} D_s^{+} )}{{\\cal{B}} ( \\bar{B}^{0} \\to D_s^{-} D^{+} )} $",
            "category": "Bs/DD",
            "average": 0.56,
            "error": 0.04999999999999922,
            "measurements": [
                {
                    "value": 0.56,
                    "error": 0.06403124237432849
                }
            ]
        },
        {
            "name": "BR_Bsbar_D-_D+.-BR_B0bar_D-_D+",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0}_s \\to D^{-} D^{+} )}{{\\cal{B}} ( \\bar{B}^{0} \\to D^{-} D^{+} )} $",
            "category": "Bs/DD",
            "average": 1.08,
            "error": 0.2236067977494329,
            "measurements": [
                {
                    "value": 1.08,
                    "error": 0.24494897427831783
                }
            ]
        },
        {
            "name": "BR_Bsbar_DsDsInclusive",
            "latex": "$ {\\cal{B}} ( \\bar{B}_s^{0} \\to D_s^{(*)+} D_s^{(*)-} ) $",
            "category": "Bs/DD",
            "average": 0.14176140602384635,
            "error": 0.011352446862491055,
            "measurements": [
                {
                    "value": 0.305,
                    "error": 0.045343136195018535
                },
                {
                    "value": 0.43200000000000005,
                    "error": 0.15187603633808366
                },
                {
                    "value": 0.338,
                    "error": 0.07473339280402035
                },
                {
                    "value": 0.035,
                    "error": 0.018493242008906927
                }
            ]
        },
        {
            "name": "BR_Bsbar_DSs-_Ds+",
            "latex": "$ {\\cal{B}} ( \\bar{B}_s^{0} \\to D_s^{+} D_s^{*-} ) $",
            "category": "Bs/DD",
            "average": 0.12566234949836827,
            "error": 0.008502505199090519,
            "measurements": [
                {
                    "value": 0.135,
                    "error": 0.020566963801203132
                },
                {
                    "value": 0.17600000000000002,
                    "error": 0.0608807510925311
                },
                {
                    "value": 0.27999999999999997,
                    "error": 0.12426138857169997
                },
                {
                    "value": 0.11299999999999999,
                    "error": 0.02582634314028992
                }
            ]
        },
        {
            "name": "BR_Bsbar_DSs-_DSs+",
            "latex": "$ {\\cal{B}} ( \\bar{B}_s^{0} \\to D_s^{*+} D_s^{*-} ) $",
            "category": "Bs/DD",
            "average": 0.13524405708041137,
            "error": 0.01097859280177784,
            "measurements": [
                {
                    "value": 0.127,
                    "error": 0.02144761058952722
                },
                {
                    "value": 0.198,
                    "error": 0.0782616684931221
                },
                {
                    "value": 0.31000000000000005,
                    "error": 0.15796045686506072
                },
                {
                    "value": 0.17500000000000002,
                    "error": 0.042190046219457975
                }
            ]
        },
        {
            "name": "BR_Bsbar_Ds+_D-.BR_B0_Ds+_D-",
            "latex": "$ \\frac{ {\\cal{B}} ( \\bar{B}^{0}_s \\to D_s^{+} D^{-} )}{ {\\cal{B}} ( B^{0} \\to D_s^{+} D^{-} )} $",
            "category": "Bs/DD",
            "average": 0.05,
            "error": 0.008944271909999154,
            "measurements": [
                {
                    "value": 0.05,
                    "error": 0.009797958971132711
                }
            ]
        },
        {
            "name": "BR_Bsbar_Ds-_Ds+",
            "latex": "$ {\\cal{B}} ( \\bar{B}_s^{0} \\to D_s^{+} D_s^{-} ) $",
            "category": "Bs/DD",
            "average": 0.051737309726449424,
            "error": 0.006778208661363693,
            "measurements": [
                {
                    "value": 0.057999999999999996,
                    "error": 0.020946887388043636
                },
                {
                    "value": 0.1,
                    "error": 0.049770287602314806
                },
                {
                    "value": 0.049,
                    "error": 0.012247448713915891
                }
            ]
        },
        {
            "name": "fpara_Bsbar_KS_Jpsi",
            "latex": "$ f_{\\parallel} ( \\bar{B}^{0}_s \\to J/\\psi K^{*0} ) $",
            "category": "Bs/cc",
            "average": 0.179,
            "error": 0.029966648127542583,
            "measurements": [
                {
                    "value": 0.179,
                    "error": 0.03266496594212215
                }
            ]
        },
        {
            "name": "BR_Bsbar_etaprime_Jpsi.BR_B0bar_rho0_Jpsi",
            "latex": "$ \\frac { {\\cal{B}} ( \\bar{B}^{0}_s \\to J/\\psi \\eta^{\\prime })} {{\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\rho )} $",
            "category": "Bs/cc",
            "average": 12.7,
            "error": 1.4960954290923352,
            "measurements": [
                {
                    "value": 12.7,
                    "error": 1.8092063007831385
                }
            ]
        },
        {
            "name": "BR_Bsbar_K0_K_pi_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}_s^{0} \\to J/\\psi K^{0} K^{\\pm} \\pi^{\\mp} ) $",
            "category": "Bs/cc",
            "average": 0.009090048664034614,
            "error": 0.0008485330667365408,
            "measurements": [
                {
                    "value": 0.0091,
                    "error": 0.001081665382639197
                }
            ]
        },
        {
            "name": "BR_Bsbar_phi_phi_Jpsi.-BR_Bsbar_phi_Jpsi",
            "latex": "$ \\frac {{\\cal{B}} ( \\bar{B}^{0}_s \\to J/\\psi \\phi(1020) \\phi(1020) )} { {\\cal{B}} ( \\bar{B}^{0}_s \\to J/\\psi \\phi(1020) )} $",
            "category": "Bs/cc",
            "average": 0.0115,
            "error": 0.0014001146451105618,
            "measurements": [
                {
                    "value": 0.0115,
                    "error": 0.001571062198086001
                }
            ]
        },
        {
            "name": "BR_Bsbar_etaprime_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}_s^{0} \\to J/\\psi \\eta^{\\prime } ) $",
            "category": "Bs/cc",
            "average": 0.00371,
            "error": 0.0009498332955419547,
            "measurements": [
                {
                    "value": 0.00371,
                    "error": 0.001194778526504253
                }
            ]
        },
        {
            "name": "fzero_Bsbar_KS_Jpsi",
            "latex": "$ f_{0} ( \\bar{B}^{0}_s \\to J/\\psi K^{*0} ) $",
            "category": "Bs/cc",
            "average": 0.49700000000000005,
            "error": 0.03535533905932742,
            "measurements": [
                {
                    "value": 0.497,
                    "error": 0.04330127018922194
                }
            ]
        },
        {
            "name": "BR_Bsbar_K0_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0}_s \\to J/\\psi K^{0} ) $",
            "category": "Bs/cc",
            "average": 0.0003494415384534603,
            "error": 3.509407628459219e-05,
            "measurements": [
                {
                    "value": 0.00032900000000000003,
                    "error": 6.731270311018568e-05
                },
                {
                    "value": 0.000366,
                    "error": 6.428063471995279e-05
                },
                {
                    "value": 0.00035,
                    "error": 9.219544457292888e-05
                }
            ]
        },
        {
            "name": "BR_Bsbar_KS0_K_pi_Jpsi.-BR_B0bar_KS0_pi+_pi-_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}_s^{0} \\to J/\\psi K_S^{0} K^{\\pm} \\pi^{\\mp} )}{{\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\pi^{+} \\pi^{-} )} $",
            "category": "Bs/cc",
            "average": 1.6384664453998248,
            "error": 0.18824755133843074,
            "measurements": [
                {
                    "value": 2.12,
                    "error": 0.26095976701399776
                }
            ]
        },
        {
            "name": "BR_Bsbar_Jpsi_p_p",
            "latex": "$ {\\cal{B}} ( \\bar{B}_s^{0} \\to J/\\psi p \\bar{p} ) $",
            "category": "Bs/cc",
            "average": 3.58e-05,
            "error": 3.8078865529319615e-06,
            "measurements": [
                {
                    "value": 3.58e-05,
                    "error": 5.03884907493765e-06
                }
            ]
        },
        {
            "name": "BR_Bsbar_etaprime_Jpsi.BR_Bsbar_eta_Jpsi",
            "latex": "$ \\frac {{\\cal{B}} ( \\bar{B}^{0}_s \\to J/\\psi \\eta^{\\prime })}  {{\\cal{B}} ( \\bar{B}_{s}^{0} \\to J/\\psi \\eta )} $",
            "category": "Bs/cc",
            "average": 0.8999999999999999,
            "error": 0.10018024634797312,
            "measurements": [
                {
                    "value": 0.9,
                    "error": 0.10901649004454791
                }
            ]
        },
        {
            "name": "BR_Bsbar_phi_psi2S.-BR_Bsbar_phi_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}_s^{0} \\to \\psi(2S) \\phi(1020) )}{{\\cal{B}} ( \\bar{B}_s^{0} \\to J/\\psi \\phi(1020) )} $",
            "category": "Bs/cc",
            "average": 0.49391536326780117,
            "error": 0.032102695964362285,
            "measurements": [
                {
                    "value": 0.489,
                    "error": 0.041255302689472535
                },
                {
                    "value": 0.52,
                    "error": 0.16340134638368192
                },
                {
                    "value": 0.55,
                    "error": 0.15968719422671313
                }
            ]
        },
        {
            "name": "BR_Bsbar_pi_pi_psi2S.BR_Bsbar_pi_pi_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} \\bar{B}_s^{0} \\to \\psi(2S) \\pi^{+}  \\pi^{-} }{{\\cal{B}} \\bar{B}_s^{0} \\to J/\\psi \\pi^{+} \\pi^{-}  } $",
            "category": "Bs/cc",
            "average": 0.3404419816090146,
            "error": 0.05018244301534781,
            "measurements": [
                {
                    "value": 0.34,
                    "error": 0.05916079783099616
                }
            ]
        },
        {
            "name": "BR_Bsbar_eta_Jpsi.BR_B0bar_etaprime_Jpsi",
            "latex": "$ \\frac{ {\\cal{B}} ( \\bar{B}^{0}_s \\to J/\\psi \\eta)} {{\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\eta^{\\prime} ) } $",
            "category": "Bs/cc",
            "average": 0.73,
            "error": 0.1414213562387059,
            "measurements": [
                {
                    "value": 0.73,
                    "error": 0.14282856857085702
                }
            ]
        },
        {
            "name": "Deltaperp_Bsbar_KS_Jpsi",
            "latex": "$ \\delta_{\\perp} ( \\bar{B}^{0}_s \\to J/\\psi K^{*0} ) $",
            "category": "Bs/cc",
            "average": 0.01,
            "error": 0.16649726621950592,
            "measurements": [
                {
                    "value": 0.01,
                    "error": 0.20824016850892618
                }
            ]
        },
        {
            "name": "BR_Bsbar_fP2_Jpsi.-BR_Bsbar_phi_Jpsi",
            "latex": "$ \\frac {{\\cal{B}} ( \\bar{B}^{0}_s \\to J/\\psi f^\\prime_2 )} { {\\cal{B}} ( \\bar{B}^{0}_s \\to J/\\psi \\phi(1020) )} $",
            "category": "Bs/cc",
            "average": 0.2646285289224428,
            "error": 0.06304848483585858,
            "measurements": [
                {
                    "value": 2.64,
                    "error": 0.4337049688440288
                },
                {
                    "value": 0.19,
                    "error": 0.0754983443527075
                }
            ]
        },
        {
            "name": "BR_Bsbar_pi-_pi+_Jpsi.-BR_Bsbar_phi_Jpsi",
            "latex": "$ \\frac {{\\cal{B}} ( \\bar{B}^{0}_s \\to J/\\psi \\pi^{+} \\pi^{-} )} { {\\cal{B}} ( \\bar{B}^{0}_s \\to J/\\psi \\phi(1020) )} $",
            "category": "Bs/cc",
            "average": 1.62,
            "error": 0.27202941021035265,
            "measurements": [
                {
                    "value": 1.62,
                    "error": 0.31559467676119
                }
            ]
        },
        {
            "name": "BR_Bsbar_K-pi+_psi2S.-BR_B0bar_K-pi+_psi2S",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}_s^{0} \\to \\psi(2S) K^{+} \\pi^{-} )}{{\\cal{B}} ( \\bar{B}^{0} \\to \\psi(2S)  K^{+} \\pi^{-}  )} $",
            "category": "Bs/cc",
            "average": 0.538,
            "error": 0.05235456045083469,
            "measurements": [
                {
                    "value": 0.538,
                    "error": 0.06469930447848726
                }
            ]
        },
        {
            "name": "BR_Bsbar_KS0_Jpsi.-BR_B0bar_KS0_Jpsi",
            "latex": "$ \\frac {{\\cal{B}} ( \\bar{B}^{0}_s \\to J/\\psi K^{0}_S )} {{\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi K^{0}_S )} $",
            "category": "Bs/cc",
            "average": 0.04487059833893203,
            "error": 0.0063124194131102965,
            "measurements": [
                {
                    "value": 0.378,
                    "error": 0.0772269383052313
                },
                {
                    "value": 0.042,
                    "error": 0.007507995737878386
                }
            ]
        },
        {
            "name": "BR_Bsbar_Jpsi_f0.BR_f0_pi-_pi+",
            "latex": "$ {{\\cal{B}} ( \\bar{B}_s^{0} \\to J/\\psi f_0(1370) )\\times {\\cal{B}} ( f_0(1370) \\to \\pi^{+} \\pi^{-} )} $",
            "category": "Bs/cc",
            "average": 0.00033991482314681354,
            "error": 0.00012771721104907794,
            "measurements": [
                {
                    "value": 0.00034,
                    "error": 0.00015309256196259955
                }
            ]
        },
        {
            "name": "Deltapara_Bsbar_KS_Jpsi",
            "latex": "$ \\delta_{\\parallel} ( \\bar{B}^{0}_s \\to J/\\psi K^{*0} ) $",
            "category": "Bs/cc",
            "average": -2.7,
            "error": 0.24839484698570413,
            "measurements": [
                {
                    "value": -2.7,
                    "error": 0.31272991542223777
                }
            ]
        },
        {
            "name": "BR_Bsbar_KS0892_psi2S.-BR_B0bar_KS0892_psi2S",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}_s^{0} \\to \\psi(2S)  K^{*0}  )}{{\\cal{B}} ( \\bar{B}^{0} \\to \\psi(2S)  K^{*0}   )} $",
            "category": "Bs/cc",
            "average": 0.538,
            "error": 0.07663550091172758,
            "measurements": [
                {
                    "value": 0.538,
                    "error": 0.09217917335276989
                }
            ]
        },
        {
            "name": "BR_Bsbar_KS0892_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}^{0}_s \\to J/\\psi K^{*0} ) $",
            "category": "Bs/cc",
            "average": 0.00042198575213462004,
            "error": 3.946028801684046e-05,
            "measurements": [
                {
                    "value": 0.000417,
                    "error": 5.317894320123333e-05
                },
                {
                    "value": 0.0008300000000000001,
                    "error": 0.0005055689863905816
                }
            ]
        },
        {
            "name": "BR_Bsbar_Jpsi_f0980.BR_f0980_pi-_pi+",
            "latex": "$ {{\\cal{B}} ( \\bar{B}_s^{0} \\to J/\\psi f_0(980) )\\times {\\cal{B}} ( f_0(980) \\to \\pi^{+} \\pi^{-} )} $",
            "category": "Bs/cc",
            "average": 0.0011606483373651946,
            "error": 0.0002996511244943771,
            "measurements": [
                {
                    "value": 0.00116,
                    "error": 0.0004293537885841096
                }
            ]
        },
        {
            "name": "BR_Bsbar_Jpsi_f11285.BR_f11285_pi+pi-pi+pi-",
            "latex": "$ {{\\cal{B}} ( \\bar{B}_s^{0} \\to J/\\psi f_1(1285) )\\times {\\cal{B}} ( f_1(1285) \\to  \\pi^{+} \\pi^{-} \\pi^{+} \\pi^{-} )} $",
            "category": "Bs/cc",
            "average": 7.849999999999998e-05,
            "error": 1.371134859827448e-05,
            "measurements": [
                {
                    "value": 7.85e-05,
                    "error": 1.6680669288500384e-05
                }
            ]
        },
        {
            "name": "BR_Bsbar_chi_c2_K+_K-.-BR_Bsbar_chi_c1_K+_K-",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0}_s \\to \\chi_{c2} K^{+} K^{-} )} { {\\cal{B}} ( \\bar{B}^{0}_s \\to \\chi_{c1} K^{+} K^{-} )} $",
            "category": "Bs/cc",
            "average": 0.16557218637455476,
            "error": 0.0308608767309102,
            "measurements": [
                {
                    "value": 0.171,
                    "error": 0.03277193921634788
                }
            ]
        },
        {
            "name": "BR_Bsbar_Jpsi_f11285",
            "latex": "$ {\\cal{B}} ( \\bar{B}_s^{0} \\to J/\\psi f_1(1285) ) $",
            "category": "Bs/cc",
            "average": 0.000714,
            "error": 0.0001318254575116333,
            "measurements": [
                {
                    "value": 0.000714,
                    "error": 0.00016319868869405248
                }
            ]
        },
        {
            "name": "BR_Bsbar_phi_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}_s^{0} \\to J/\\psi \\phi(1020) ) $",
            "category": "Bs/cc",
            "average": 0.010690631305308064,
            "error": 0.000924223203321765,
            "measurements": [
                {
                    "value": 0.0105,
                    "error": 0.0014767870530310052
                },
                {
                    "value": 0.0125,
                    "error": 0.003383784863137726
                },
                {
                    "value": 0.009300000000000001,
                    "error": 0.0036905284174491874
                }
            ]
        },
        {
            "name": "BR_Bsbar_Jpsi_f0980.BR_f0980_pi-_pi+.-BR_Bsbar_phi_Jpsi.-BR_phi_K-_K+",
            "latex": "$ \\frac{{\\cal{B}} ( \\bar{B}^{0}_s \\to J/\\psi f_0(980) ) \\times {\\cal{B}} ( f_0(980) \\to \\pi^{+} \\pi^{-} )} { {\\cal{B}} ( \\bar{B}^{0}_s \\to J/\\psi \\phi(1020) )) \\times {\\cal{B}} ( \\phi \\to K^{+} K^{-} )} $",
            "category": "Bs/cc",
            "average": 0.2054362151128365,
            "error": 0.016774079947841036,
            "measurements": [
                {
                    "value": 2.52,
                    "error": 0.5818457905686047
                },
                {
                    "value": 0.257,
                    "error": 0.028142494558940582
                },
                {
                    "value": 0.14,
                    "error": 0.03349626844888845
                },
                {
                    "value": 0.275,
                    "error": 0.09551439682058406
                }
            ]
        },
        {
            "name": "BR_Bsbar_eta_Jpsi",
            "latex": "$ {\\cal{B}} ( \\bar{B}_s^{0} \\to J/\\psi \\eta ) $",
            "category": "Bs/cc",
            "average": 0.0050999999999999995,
            "error": 0.0011186618809321787,
            "measurements": [
                {
                    "value": 0.0050999999999999995,
                    "error": 0.0014993177858749168
                }
            ]
        },
        {
            "name": "BR_Bsbar_eta_Jpsi.BR_B0bar_rho0_Jpsi",
            "latex": "$ \\frac {{\\cal{B}} ( \\bar{B}^{0}_s \\to J/\\psi \\eta)} { {\\cal{B}} ( \\bar{B}^{0} \\to J/\\psi \\rho )} $",
            "category": "Bs/cc",
            "average": 14.0,
            "error": 2.062633644349263,
            "measurements": [
                {
                    "value": 14.0,
                    "error": 2.6618966889747036
                }
            ]
        },
        {
            "name": "BR_Bsbar_Lambda0bar_pi-_Lambdac+",
            "latex": "$ {\\cal{B}} ( \\bar{B}_s^{0} \\to \\Lambda_c^{+} \\bar{\\Lambda} \\pi^{-} ) $",
            "category": "Bs/baryon",
            "average": 0.003988577805258464,
            "error": 0.0011998646846839952,
            "measurements": [
                {
                    "value": 0.0036000000000000003,
                    "error": 0.0017798819581896067
                },
                {
                    "value": 0.0048,
                    "error": 0.002638181191654584
                }
            ]
        },
        {
            "name": "BR_B-_K-_KS0892_DS0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{*}(2007)^{0} K^{-} K^{*}(892)^{0} ) $",
            "category": "Bu/D",
            "average": 0.015300000000000001,
            "error": 0.004244997055358225,
            "measurements": [
                {
                    "value": 0.015300000000000001,
                    "error": 0.005141011573610781
                }
            ]
        },
        {
            "name": "BR_B-_K-_K-_Ds+",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D_s^{+} K^{-} K^{-} ) $",
            "category": "Bu/D",
            "average": 0.00011,
            "error": 4.482186966202995e-05,
            "measurements": [
                {
                    "value": 0.00011,
                    "error": 4.917316341257699e-05
                }
            ]
        },
        {
            "name": "BR_B-_pbar_pi-_pi-_DS+_p",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{*}(2010)^{+} p \\bar{p} \\pi^{-} \\pi^{-} ) $",
            "category": "Bu/D",
            "average": 0.00186,
            "error": 0.0002483948469674844,
            "measurements": [
                {
                    "value": 0.00186,
                    "error": 0.00031272991542223783
                }
            ]
        },
        {
            "name": "BR_B-_K-_pi-_DSs+",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D_s^{*+} K^{-} \\pi^{-} ) $",
            "category": "Bu/D",
            "average": 0.0015372095120611963,
            "error": 0.00022439022834810346,
            "measurements": [
                {
                    "value": 0.00147,
                    "error": 0.00035643493475604273
                },
                {
                    "value": 0.00167,
                    "error": 0.0005249761899362675
                }
            ]
        },
        {
            "name": "BR_B-_pi-_D10.BR_D10_pi-_pi+_D0",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to D_1^{0}(2420) \\pi^{-} )\\times {\\cal{B}} ( D_1^{0}(2420) \\to D^{0} \\pi^{-} \\pi^{+} )} $",
            "category": "Bu/D",
            "average": 0.00185,
            "error": 0.0005505176006949325,
            "measurements": [
                {
                    "value": 0.00185,
                    "error": 0.00072051233663559
                }
            ]
        },
        {
            "name": "BR_B-_pi-_pi-_pi-_pi+_DS+",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{*}(2010)^{+} \\pi^{-} \\pi^{+} \\pi^{-} \\pi^{-} ) $",
            "category": "Bu/D",
            "average": 0.0256,
            "error": 0.004201190307520001,
            "measurements": [
                {
                    "value": 0.0256,
                    "error": 0.0053422841556772325
                }
            ]
        },
        {
            "name": "BR_B-_pi-_K-_D+",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{+} K^{-} \\pi^{-}  ) $",
            "category": "Bu/D",
            "average": 0.0007308989593546721,
            "error": 2.906629902999793e-05,
            "measurements": [
                {
                    "value": 0.000731,
                    "error": 5.338539126015656e-05
                }
            ]
        },
        {
            "name": "BR_B-_K-_DS0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{*}(2007)^{0} K^{-} ) $",
            "category": "Bu/D",
            "average": 0.00359,
            "error": 0.0010104949282406135,
            "measurements": [
                {
                    "value": 0.00359,
                    "error": 0.0011337107214805723
                }
            ]
        },
        {
            "name": "BR_B-_pi-_D10.-BR_B-_pi-_pi-_pi+_D0.BR_D10_pi-_pi+_D0",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to D_1^{0} \\pi^{-} ) \\times {\\cal{B}} ( D_1^{0} \\to D^{0} \\pi^{+} \\pi^{-} )}{{\\cal{B}} ( B^{-} \\to D^{0} \\pi^{+} \\pi^{-} \\pi^{-} )} $",
            "category": "Bu/D",
            "average": 0.4,
            "error": 0.08602325267041426,
            "measurements": [
                {
                    "value": 0.4,
                    "error": 0.09949874371066199
                }
            ]
        },
        {
            "name": "BR_B-_K-_D0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{0} K^{-} ) $",
            "category": "Bu/D",
            "average": 0.00383,
            "error": 0.0003905185340756474,
            "measurements": [
                {
                    "value": 0.00383,
                    "error": 0.0005393514624064719
                }
            ]
        },
        {
            "name": "BR_B-_pi-_DS0.-BR_B-_pi-_D0",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to D^{*}(2007)^{0} \\pi^{-} )}{{\\cal{B}} ( B^{-} \\to D^{0} \\pi^{-} )} $",
            "category": "Bu/D",
            "average": 1.14,
            "error": 0.08062257748302595,
            "measurements": [
                {
                    "value": 1.14,
                    "error": 0.09000000000000001
                }
            ]
        },
        {
            "name": "BR_B-_pi-_pi-_DS+",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{*}(2010)^{+} \\pi^{-} \\pi^{-} ) $",
            "category": "Bu/D",
            "average": 0.01231672240802665,
            "error": 0.0014601812627052068,
            "measurements": [
                {
                    "value": 0.0125,
                    "error": 0.003212475680841802
                },
                {
                    "value": 0.0122,
                    "error": 0.0025942243542145696
                }
            ]
        },
        {
            "name": "BR_B-_K-_KS0892_D0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{0} K^{-} K^{*}(892)^{0} ) $",
            "category": "Bu/D",
            "average": 0.0075,
            "error": 0.0017029386365926412,
            "measurements": [
                {
                    "value": 0.0075,
                    "error": 0.0020273134932713294
                }
            ]
        },
        {
            "name": "BR_B-_pi-_pi-_D+",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{+} \\pi^{-} \\pi^{-} ) $",
            "category": "Bu/D",
            "average": 0.010725818181818033,
            "error": 0.0005458604550282381,
            "measurements": [
                {
                    "value": 0.0102,
                    "error": 0.0021587033144922904
                },
                {
                    "value": 0.0108,
                    "error": 0.0007681145747868608
                }
            ]
        },
        {
            "name": "BR_B-_pi+_K-_D-",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{-} K^{-} \\pi^{+}  ) $",
            "category": "Bu/D",
            "average": 5.3093044873980286e-05,
            "error": 1.0199918188750828e-05,
            "measurements": [
                {
                    "value": 5.31e-05,
                    "error": 1.1803812943282355e-05
                }
            ]
        },
        {
            "name": "BR_B-_pi-_DS20.-BR_B-_pi-_pi-_pi+_D0.BR_DS20_pi-_pi+_D0",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to D_2^{*0} \\pi^{-} ) \\times {\\cal{B}} ( D_2^{*0} \\to D^{0} \\pi^{+} \\pi^{-} )}{{\\cal{B}} ( B^{-} \\to D^{0} \\pi^{+} \\pi^{-} \\pi^{-} )} $",
            "category": "Bu/D",
            "average": 0.4,
            "error": 0.10770329614247108,
            "measurements": [
                {
                    "value": 0.4,
                    "error": 0.11489125293076059
                }
            ]
        },
        {
            "name": "BR_B-_pi-_DS00.BR_DS00_pi-_D+",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to D_0^{*0} \\pi^{-} )\\times {\\cal{B}} ( D_0^{*0} \\to D^{+} \\pi^{-} )} $",
            "category": "Bu/D",
            "average": 0.006676809651511718,
            "error": 0.000453866628313615,
            "measurements": [
                {
                    "value": 0.0060999999999999995,
                    "error": 0.002130727575266252
                },
                {
                    "value": 0.0068,
                    "error": 0.0021
                }
            ]
        },
        {
            "name": "BR_B-_pi-_DS20.BR_DS20_pi-_D+",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to D_2^{*0}(2460) \\pi^{-} )\\times {\\cal{B}} ( D_2^{*0}(2460) \\to D^{+} \\pi^{-} )} $",
            "category": "Bu/D",
            "average": 0.003484921217061079,
            "error": 0.00026062382037966814,
            "measurements": [
                {
                    "value": 0.0034,
                    "error": 0.0009848857801796104
                },
                {
                    "value": 0.0035,
                    "error": 0.0005291502622129181
                }
            ]
        },
        {
            "name": "BR_B-_pi-_DS20.-BR_B-_pi-_pi-_pi+_D0.BR_DS20_pi-_DS+",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to D_2^{*0} \\pi^{-} ) \\times {\\cal{B}} ( D_2^{*0} \\to D^{*+} \\pi^{-} )}{{\\cal{B}} ( B^{-} \\to D^{0} \\pi^{+} \\pi^{-} \\pi^{-} )} $",
            "category": "Bu/D",
            "average": 0.39,
            "error": 0.12649110640694444,
            "measurements": [
                {
                    "value": 0.39,
                    "error": 0.132664991614216
                }
            ]
        },
        {
            "name": "BR_B-_pi-_D0.-BR_B0bar_pi-_D+",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to D^{0} \\pi^{-} )}{{\\cal{B}} ( \\bar{B}^{0} \\to D^{+} \\pi^{-} )} $",
            "category": "Bu/D",
            "average": 1.97,
            "error": 0.23259406698967175,
            "measurements": [
                {
                    "value": 1.97,
                    "error": 0.31336879231984793
                }
            ]
        },
        {
            "name": "BR_B-_KS-_D0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{0} K^{*}(892)^{-} ) $",
            "category": "Bu/D",
            "average": 0.00529,
            "error": 0.0004534313619501854,
            "measurements": [
                {
                    "value": 0.00529,
                    "error": 0.0005667450926121902
                }
            ]
        },
        {
            "name": "BR_B-_pi-_DS10.BR_DS10_pi-_DS+",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to D_1^{0}(H) \\pi^{-} )\\times {\\cal{B}} ( D_1^{0}(H) \\to D^{*}(2010)^{+} \\pi^{-} )} $",
            "category": "Bu/D",
            "average": 0.005000018631881053,
            "error": 0.0010770343906369153,
            "measurements": [
                {
                    "value": 0.005,
                    "error": 0.0015231546211727815
                }
            ]
        },
        {
            "name": "BR_B-_KS-_DS0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{*}(2007)^{0} K^{*}(892)^{-} ) $",
            "category": "Bu/D",
            "average": 0.0083,
            "error": 0.0014847558721890952,
            "measurements": [
                {
                    "value": 0.0083,
                    "error": 0.0017885748516626304
                }
            ]
        },
        {
            "name": "BR_B-_pi-_pi-_pi+_D0.-BR_B-_pi-_D0",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to D^{0} \\pi^{+} \\pi^{-} \\pi^{-} )}{{\\cal{B}} ( B^{-} \\to D^{0} \\pi^{-} )} $",
            "category": "Bu/D",
            "average": 1.27,
            "error": 0.12529964086095627,
            "measurements": [
                {
                    "value": 1.27,
                    "error": 0.16673332000533067
                }
            ]
        },
        {
            "name": "BR_B-_Ds-_pi0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D_s^{-} \\pi^{0} ) $",
            "category": "Bu/D",
            "average": 0.00015000000000000001,
            "error": 5.0298346610419076e-05,
            "measurements": [
                {
                    "value": 0.00015000000000000001,
                    "error": 5.5075496483462005e-05
                }
            ]
        },
        {
            "name": "BR_B-_pbar_D0_Lambda0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{0} \\Lambda \\bar{p} ) $",
            "category": "Bu/D",
            "average": 0.000143,
            "error": 3.197428475753529e-05,
            "measurements": [
                {
                    "value": 0.000143,
                    "error": 3.676045070333577e-05
                }
            ]
        },
        {
            "name": "BR_B-_K-_pi-_Ds+",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D_s^{+} K^{-} \\pi^{-} ) $",
            "category": "Bu/D",
            "average": 0.0019653969947277332,
            "error": 0.00022859311222095854,
            "measurements": [
                {
                    "value": 0.0019399999999999999,
                    "error": 0.00038085266800831803
                },
                {
                    "value": 0.00202,
                    "error": 0.00055937465083788
                }
            ]
        },
        {
            "name": "BR_B-_pi-_pi-_pi+_DS0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{*}(2007)^{0} \\pi^{-} \\pi^{+} \\pi^{-} ) $",
            "category": "Bu/D",
            "average": 0.1055,
            "error": 0.013729530217745867,
            "measurements": [
                {
                    "value": 0.10550000000000001,
                    "error": 0.018839055178007203
                }
            ]
        },
        {
            "name": "BR_B-_K-_pi-_pi+_D0.-BR_B-_pi-_pi-_pi+_D0",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to D^{0} K^{-} \\pi^{+} \\pi^{-} )}{{\\cal{B}} ( B^{-} \\to D^{0} \\pi^{+} \\pi^{-} \\pi^{-} )} $",
            "category": "Bu/D",
            "average": 0.9400000000000001,
            "error": 0.15811388300872842,
            "measurements": [
                {
                    "value": 0.9400000000000001,
                    "error": 0.18193405398660253
                }
            ]
        },
        {
            "name": "BR_B-_Ds-_phi",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D_s^{-} \\phi ) $",
            "category": "Bu/D",
            "average": 2.0964970169751496e-06,
            "error": 1.737982307854276e-06,
            "measurements": [
                {
                    "value": 1.2e-06,
                    "error": 1.8824586623834264e-06
                },
                {
                    "value": 1.8700000000000004e-05,
                    "error": 1.0795605436637457e-05
                }
            ]
        },
        {
            "name": "BR_B-_pi-_pi-_pi-_pi+_pi+_DS0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{*}(2007)^{0} \\pi^{-} \\pi^{+} \\pi^{-} \\pi^{+} \\pi^{-} ) $",
            "category": "Bu/D",
            "average": 0.0567,
            "error": 0.012452309022827804,
            "measurements": [
                {
                    "value": 0.0567,
                    "error": 0.015076803374721049
                }
            ]
        },
        {
            "name": "BR_B-_pi-_DS10.-BR_B-_pi-_pi-_pi+_D0.BR_DS10_pi-_DS+",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to D_1^{*0} \\pi^{-} ) \\times {\\cal{B}} ( D_1^{*0} \\to D^{*+} \\pi^{-} )}{{\\cal{B}} ( B^{-} \\to D^{0} \\pi^{+} \\pi^{-} \\pi^{-} )} $",
            "category": "Bu/D",
            "average": 0.9300000000000003,
            "error": 0.1835755975065585,
            "measurements": [
                {
                    "value": 0.9300000000000002,
                    "error": 0.20445048300260876
                }
            ]
        },
        {
            "name": "BR_B-_pbar_pi-_DS0_p",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{*}(2007)^{0} p \\bar{p} \\pi^{-} ) $",
            "category": "Bu/D",
            "average": 0.0037300000000000002,
            "error": 0.0003190611226708764,
            "measurements": [
                {
                    "value": 0.0037300000000000002,
                    "error": 0.00041797129088012733
                }
            ]
        },
        {
            "name": "BR_B-_pi-_DS20.-BR_B-_pi-_D10",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to D_2^{*0}(2460) \\pi^{-} )}{{\\cal{B}} ( B^{-} \\to D_1^{0}(2420) \\pi^{-} )} $",
            "category": "Bu/D",
            "average": 0.8,
            "error": 0.17464249196705717,
            "measurements": [
                {
                    "value": 0.8,
                    "error": 0.23685438564654024
                }
            ]
        },
        {
            "name": "BR_B-_D-_K0bar",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{-} \\bar{K}^{0} ) $",
            "category": "Bu/D",
            "average": -3.8e-05,
            "error": 2.4557002211505663e-05,
            "measurements": [
                {
                    "value": -3.8e-05,
                    "error": 2.834927628425077e-05
                }
            ]
        },
        {
            "name": "BR_B-_D-_KS0892bar",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{-} \\bar{K}^{*}(892)^{0} ) $",
            "category": "Bu/D",
            "average": -5.300000000000001e-05,
            "error": 2.6916531257471447e-05,
            "measurements": [
                {
                    "value": -5.3e-05,
                    "error": 3.136040496173217e-05
                }
            ]
        },
        {
            "name": "BR_B-_pbar_pi-_D0_p",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{0} p \\bar{p} \\pi^{-} ) $",
            "category": "Bu/D",
            "average": 0.0037199999999999998,
            "error": 0.00027313000567495325,
            "measurements": [
                {
                    "value": 0.00372,
                    "error": 0.00037027017163147234
                }
            ]
        },
        {
            "name": "BR_B-_pi-_DSS0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{**0} \\pi^{-} ) $",
            "category": "Bu/D",
            "average": 0.055,
            "error": 0.011627553482998872,
            "measurements": [
                {
                    "value": 0.055,
                    "error": 0.015600000000000001
                }
            ]
        },
        {
            "name": "BR_B-_pi-_D10.BR_D10_pi-_DS+",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to D_1^{0}(2420) \\pi^{-} )\\times {\\cal{B}} ( D_1^{0}(2420) \\to D^{*}(2010)^{+} \\pi^{-} )} $",
            "category": "Bu/D",
            "average": 0.006236233200152927,
            "error": 0.0009024236287304395,
            "measurements": [
                {
                    "value": 0.0068,
                    "error": 0.0019899748742132402
                },
                {
                    "value": 0.0059,
                    "error": 0.001584297951775486
                }
            ]
        },
        {
            "name": "BR_B-_pi-_DS2+.-BR_B-_pi-_pi-_pi+_D0.BR_DS2+_pi-_pi+_D0",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to D_2^{*+} \\pi^{-} ) \\times {\\cal{B}} ( D_2^{*+} \\to D^{0} \\pi^{-} \\pi^{+} )}{{\\cal{B}} ( B^{-} \\to D^{0} \\pi^{+} \\pi^{-} \\pi^{-} )} $",
            "category": "Bu/D",
            "average": 0.13999999999999999,
            "error": 0.06324555320335709,
            "measurements": [
                {
                    "value": 0.13999999999999999,
                    "error": 0.066332495807108
                }
            ]
        },
        {
            "name": "BR_B-_pi-_DSS0.-BR_B-_pi-_D0",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to D^{**0} \\pi^{-} )}{{\\cal{B}} ( B^{-} \\to D^{0} \\pi^{-} )} $",
            "category": "Bu/D",
            "average": 1.22,
            "error": 0.2641968962884935,
            "measurements": [
                {
                    "value": 1.22,
                    "error": 0.3502855977627399
                }
            ]
        },
        {
            "name": "BR_B-_K-_D0.-BR_B-_pi-_D0",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to D^{0} K^{-} )}{{\\cal{B}} ( B^{-} \\to D^{0} \\pi^{-} )} $",
            "category": "Bu/D",
            "average": 0.25857363210585327,
            "error": 0.00671039585431762,
            "measurements": [
                {
                    "value": 0.774,
                    "error": 0.02942787793912433
                },
                {
                    "value": 0.779,
                    "error": 0.027531799795872412
                },
                {
                    "value": 0.077,
                    "error": 0.009848857801796104
                },
                {
                    "value": 0.677,
                    "error": 0.04825971404805462
                },
                {
                    "value": 0.8310000000000001,
                    "error": 0.045000000000000005
                }
            ]
        },
        {
            "name": "BR_B-_K-_DS0.-BR_B-_pi-_DS0",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to D^{*}(2007)^{0} K^{-} )}{{\\cal{B}} ( B^{-} \\to D^{*}(2007)^{0} \\pi^{-} )} $",
            "category": "Bu/D",
            "average": 0.08108472240223538,
            "error": 0.005217407782938331,
            "measurements": [
                {
                    "value": 0.078,
                    "error": 0.022869193252058544
                },
                {
                    "value": 0.0813,
                    "error": 0.0065478247829851895
                }
            ]
        },
        {
            "name": "BR_B-_pi-_DS0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{*}(2007)^{0} \\pi^{-} ) $",
            "category": "Bu/D",
            "average": 0.05111625141528835,
            "error": 0.002233139686408014,
            "measurements": [
                {
                    "value": 0.04820000000000001,
                    "error": 0.005093132631298737
                },
                {
                    "value": 0.0513,
                    "error": 0.00452990066116245
                },
                {
                    "value": 0.0552,
                    "error": 0.00618465843842649
                }
            ]
        },
        {
            "name": "BR_B-_pi-_DS20.BR_DS20_pi-_DS+",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to D_2^{*0}(2460) \\pi^{-} )\\times {\\cal{B}} ( D_2^{*0}(2460) \\to D^{*}(2010)^{+} \\pi^{-} )} $",
            "category": "Bu/D",
            "average": 0.0018000067263740764,
            "error": 0.000343063269178651,
            "measurements": [
                {
                    "value": 0.0018000000000000002,
                    "error": 0.0005567764362830022
                },
                {
                    "value": 0.0018,
                    "error": 0.0007681145747868608
                }
            ]
        },
        {
            "name": "BR_B-_pi-_D0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{0} \\pi^{-} ) $",
            "category": "Bu/D",
            "average": 0.04621107602386907,
            "error": 0.0015276267956812139,
            "measurements": [
                {
                    "value": 0.0434,
                    "error": 0.003674234614174767
                },
                {
                    "value": 0.0449,
                    "error": 0.0038716921365211875
                },
                {
                    "value": 0.049,
                    "error": 0.0031901724091340264
                }
            ]
        },
        {
            "name": "BR_B-_Ds-_K+_K-.-BR_B-_Ds-_D0bar.BR_D0bar_K+_K-",
            "latex": "$ \\frac{ {\\cal{B}} ( B^{-} \\to D_s^{-} K^+ K^- ) }{ {\\cal{B}} ( B^{-} \\to D_s^{-} \\bar{D}^0 ) \\times {\\cal{B}} ( \\bar{D}^0 \\to K^+ K^- ) } $",
            "category": "Bu/D",
            "average": 1.97,
            "error": 0.22671568096370223,
            "measurements": [
                {
                    "value": 1.97,
                    "error": 0.2833725463060951
                }
            ]
        },
        {
            "name": "BR_B-_K-_K0_D0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{0} K^{-} K^{0} ) $",
            "category": "Bu/D",
            "average": 0.0055,
            "error": 0.0016124515496597099,
            "measurements": [
                {
                    "value": 0.0055,
                    "error": 0.0018
                }
            ]
        },
        {
            "name": "BR_B-_pbar_pi-_pi-_D+_p",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{+} p \\bar{p} \\pi^{-} \\pi^{-} ) $",
            "category": "Bu/D",
            "average": 0.00166,
            "error": 0.000299666481275434,
            "measurements": [
                {
                    "value": 0.00166,
                    "error": 0.0004033608806019741
                }
            ]
        },
        {
            "name": "BR_B-_pi-_DS10.-BR_B-_pi-_pi-_pi+_D0.BR_DS10_pi-_pi+_D0",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to D_1^{*0} \\pi^{-} ) \\times {\\cal{B}} ( D_1^{*0} \\to D^{0} \\pi^{+} \\pi^{-} )}{{\\cal{B}} ( B^{-} \\to D^{0} \\pi^{+} \\pi^{-} \\pi^{-} )} $",
            "category": "Bu/D",
            "average": 1.03,
            "error": 0.17492855684444325,
            "measurements": [
                {
                    "value": 1.03,
                    "error": 0.19672315572906005
                }
            ]
        },
        {
            "name": "BR_B-_pi-_K-_DS+.-BR_B-_pi-_pi-_DS+",
            "latex": "$ \\frac{ {\\cal{B}} ( B^- \\to D^*(2010)^+ K^- \\pi^- ) }{ {\\cal{B}} ( B^- \\to D^*(2010)^+ \\pi^- \\pi^- ) } $",
            "category": "Bu/D",
            "average": 0.639,
            "error": 0.055072679252054946,
            "measurements": [
                {
                    "value": 0.639,
                    "error": 0.07305477397131552
                }
            ]
        },
        {
            "name": "BR_B-_Ds-_DS0.BR_Ds-_pi-_phi",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to D_s^{-} D^{*}(2007)^{0} )\\times {\\cal{B}} ( D_s^{-} \\to \\phi(1020) \\pi^{-} )} $",
            "category": "Bu/DD",
            "average": 0.0029500000000000004,
            "error": 0.0007430343195303969,
            "measurements": [
                {
                    "value": 0.0029500000000000004,
                    "error": 0.0008256512580987205
                }
            ]
        },
        {
            "name": "BR_B-_Ds-_D0.BR_Ds-_pi-_phi",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to D_s^{-} D^{0} )\\times {\\cal{B}} ( D_s^{-} \\to \\phi(1020) \\pi^{-} )} $",
            "category": "Bu/DD",
            "average": 0.004,
            "error": 0.0008626702730475888,
            "measurements": [
                {
                    "value": 0.004,
                    "error": 0.0010565509926170151
                }
            ]
        },
        {
            "name": "BR_B-_DsJ-2460_D0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D_{sJ}(2460)^{-} D^{0} ) $",
            "category": "Bu/DD",
            "average": 0.043000000000000003,
            "error": 0.020615528128088326,
            "measurements": [
                {
                    "value": 0.043000000000000003,
                    "error": 0.024372115213907884
                }
            ]
        },
        {
            "name": "BR_B-_DsJ-2460_DS0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D_{sJ}(2460)^{-} D^{*}(2007)^{0} ) $",
            "category": "Bu/DD",
            "average": 0.11200000000000002,
            "error": 0.032802438933712624,
            "measurements": [
                {
                    "value": 0.11200000000000002,
                    "error": 0.0384187454245971
                }
            ]
        },
        {
            "name": "BR_B-_D0bar_K-_D0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{0} \\bar{D}^{0} K^{-} ) $",
            "category": "Bu/DD",
            "average": 0.01395006496143538,
            "error": 0.0011451031960473836,
            "measurements": [
                {
                    "value": 0.0117,
                    "error": 0.00298496231131986
                },
                {
                    "value": 0.0222,
                    "error": 0.004164803370178523
                },
                {
                    "value": 0.0131,
                    "error": 0.001835755975068582
                }
            ]
        },
        {
            "name": "BR_B-_DSs-_DS0.BR_Ds-_pi-_phi",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to D_s^{*-} D^{*}(2007)^{0} )\\times {\\cal{B}} ( D_s^{-} \\to \\phi(1020) \\pi^{-} )} $",
            "category": "Bu/DD",
            "average": 0.008570000000000001,
            "error": 0.0018560172412992286,
            "measurements": [
                {
                    "value": 0.008570000000000001,
                    "error": 0.0021677638247742763
                }
            ]
        },
        {
            "name": "BR_B-_Ds-_DS0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D_s^{-} D^{*}(2007)^{0} ) $",
            "category": "Bu/DD",
            "average": 0.121,
            "error": 0.030479501308256312,
            "measurements": [
                {
                    "value": 0.121,
                    "error": 0.03645545226711638
                }
            ]
        },
        {
            "name": "BR_B-_DS-_K-_DS+",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{*}(2010)^{-} D^{*}(2010)^{+} K^{-} ) $",
            "category": "Bu/DD",
            "average": 0.013200000000000002,
            "error": 0.0017691806012954138,
            "measurements": [
                {
                    "value": 0.013200000000000002,
                    "error": 0.002137755832643195
                }
            ]
        },
        {
            "name": "BR_B-_D-_D0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{-} D^{0} ) $",
            "category": "Bu/DD",
            "average": 0.004078605069382939,
            "error": 0.00038597217729606704,
            "measurements": [
                {
                    "value": 0.00562,
                    "error": 0.0012318279100588688
                },
                {
                    "value": 0.00385,
                    "error": 0.0006204030947698439
                },
                {
                    "value": 0.0038,
                    "error": 0.00092660671268883
                }
            ]
        },
        {
            "name": "BR_B-_DsJ-2460_D0.BR_DsJ-2460_Ds-_gamma",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to D^{0} D_{sJ}(2460)^{-} )\\times {\\cal{B}} ( D_{sJ}(2460)^{-} \\to D_s^{-} \\gamma )} $",
            "category": "Bu/DD",
            "average": 0.005834466588511137,
            "error": 0.0017462525706622698,
            "measurements": [
                {
                    "value": 0.0056,
                    "error": 0.0028608156393498405
                },
                {
                    "value": 0.006,
                    "error": 0.003285042255760066
                }
            ]
        },
        {
            "name": "BR_B-_D-_K-_DS+",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{*}(2010)^{+} D^{-} K^{-} ) $",
            "category": "Bu/DD",
            "average": 0.006,
            "error": 0.0012806248474865698,
            "measurements": [
                {
                    "value": 0.006,
                    "error": 0.00150996688705415
                }
            ]
        },
        {
            "name": "BR_B-_D0bar_K-_DS0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{*}(2007)^{0} \\bar{D}^{0} K^{-} ) $",
            "category": "Bu/DD",
            "average": 0.022600000000000002,
            "error": 0.002334523505985751,
            "measurements": [
                {
                    "value": 0.0226,
                    "error": 0.0028879058156387307
                }
            ]
        },
        {
            "name": "BR_B-_D-_K0bar_D0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{0} D^{-} \\bar{K}^{0} ) $",
            "category": "Bu/DD",
            "average": 0.015500000000000003,
            "error": 0.0021400934559032696,
            "measurements": [
                {
                    "value": 0.015500000000000002,
                    "error": 0.0025039968051097827
                }
            ]
        },
        {
            "name": "BR_B-_D-_K-_D+",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{+} D^{-} K^{-} ) $",
            "category": "Bu/DD",
            "average": 0.0022,
            "error": 0.0007071067811865474,
            "measurements": [
                {
                    "value": 0.0022,
                    "error": 0.0008660254037844387
                }
            ]
        },
        {
            "name": "BR_B-_DSs-_DS0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D_s^{*-} D^{*}(2007)^{0} ) $",
            "category": "Bu/DD",
            "average": 0.17,
            "error": 0.035383612025907944,
            "measurements": [
                {
                    "value": 0.17,
                    "error": 0.0427551166528639
                }
            ]
        },
        {
            "name": "BR_B-_DS0bar_K-_DS0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\bar{D}^{*}(2007)^{0} D^{*}(2007)^{0} K^{-} ) $",
            "category": "Bu/DD",
            "average": 0.11230000000000001,
            "error": 0.013104197800704867,
            "measurements": [
                {
                    "value": 0.11230000000000001,
                    "error": 0.01817910888905174
                }
            ]
        },
        {
            "name": "BR_B-_D0bar_K-_pi0_D0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{0} \\bar{D}^{0} \\pi^{0} K^{-} ) $",
            "category": "Bu/DD",
            "average": 0.00107,
            "error": 0.0004081695049374173,
            "measurements": [
                {
                    "value": 0.00107,
                    "error": 0.00048525581152428893
                }
            ]
        },
        {
            "name": "BR_B-_Ds-_D0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D_s^{-} D^{0} ) $",
            "category": "Bu/DD",
            "average": 0.133,
            "error": 0.03671511950137112,
            "measurements": [
                {
                    "value": 0.133,
                    "error": 0.04870318264754368
                }
            ]
        },
        {
            "name": "BR_B-_D-_K0bar_DS0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{*}(2007)^{0} D^{-} \\bar{K}^{0} ) $",
            "category": "Bu/DD",
            "average": 0.0206,
            "error": 0.004841487374764084,
            "measurements": [
                {
                    "value": 0.0206,
                    "error": 0.005695612346359257
                }
            ]
        },
        {
            "name": "BR_B-_D1s-_D0.BR_D1s-_DS0bar_K-",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to D_{s1}(2536)^{-} D^{0} )\\times {\\cal{B}} ( D_{s1}(2536)^{-} \\to \\bar{D}^{*}(2007)^{0} K^{-} )} $",
            "category": "Bu/DD",
            "average": 0.00216,
            "error": 0.0006876772498781677,
            "measurements": [
                {
                    "value": 0.00216,
                    "error": 0.0008218272324521743
                }
            ]
        },
        {
            "name": "BR_B-_DSs-_D0.BR_Ds-_pi-_phi",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to D_s^{*-} D^{0} )\\times {\\cal{B}} ( D_s^{-} \\to \\phi(1020) \\pi^{-} )} $",
            "category": "Bu/DD",
            "average": 0.00313,
            "error": 0.0013238202294873723,
            "measurements": [
                {
                    "value": 0.00313,
                    "error": 0.0014453027364535085
                }
            ]
        },
        {
            "name": "BR_B-_D-_DS0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{*0} D^{-} ) $",
            "category": "Bu/DD",
            "average": 0.0063,
            "error": 0.0017211914478058505,
            "measurements": [
                {
                    "value": 0.0063,
                    "error": 0.0019912307751739876
                }
            ]
        },
        {
            "name": "BR_B-_Ds-_D0.BR_B0bar_Ds+_D-",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D_s^{-} D^{0} )/{\\cal{B}} ( \\bar{B}^{0} \\to D_s^{+} D^{-} ) $",
            "category": "Bu/DD",
            "average": 1.22,
            "error": 0.0728010988928525,
            "measurements": [
                {
                    "value": 1.22,
                    "error": 0.10099504938362078
                }
            ]
        },
        {
            "name": "BR_B-_DS-_K-_D+",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{+} D^{*}(2010)^{-} K^{-} ) $",
            "category": "Bu/DD",
            "average": 0.0063,
            "error": 0.0010816653826391965,
            "measurements": [
                {
                    "value": 0.0063,
                    "error": 0.0012369316876852982
                }
            ]
        },
        {
            "name": "BR_B-_DS-_K0bar_D0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{0} D^{*}(2010)^{-} \\bar{K}^{0} ) $",
            "category": "Bu/DD",
            "average": 0.0381,
            "error": 0.0038600518131237578,
            "measurements": [
                {
                    "value": 0.0381,
                    "error": 0.004493328387732194
                }
            ]
        },
        {
            "name": "BR_B-_D1s-_D0.BR_D1s-_DS-_K0bar",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to D_{s1}(2536)^{-} D^{0} )\\times {\\cal{B}} ( D_{s1}(2536)^{-} \\to D^{*}(2010)^{-} \\bar{K}^{0} )} $",
            "category": "Bu/DD",
            "average": 0.0023,
            "error": 0.001070186899564743,
            "measurements": [
                {
                    "value": 0.0023,
                    "error": 0.001153342967204465
                }
            ]
        },
        {
            "name": "BR_B-_DsJ-2460_DS0.BR_DsJ-2460_DSs-_pi0",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to D_{sJ}(2460)^{-} D^{*}(2007)^{0} )\\times {\\cal{B}} ( D_{sJ}(2460)^{-} \\to D_s^{*-} \\pi^{0} )} $",
            "category": "Bu/DD",
            "average": 0.076,
            "error": 0.032690036327930196,
            "measurements": [
                {
                    "value": 0.076,
                    "error": 0.04295461373848565
                }
            ]
        },
        {
            "name": "BR_B-_DsJ-2460_D0.BR_DsJ-2460_DSs-_pi0",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to D^{0} D_{sJ}(2460)^{-} )\\times {\\cal{B}} ( D_{sJ}(2460)^{-} \\to D_s^{*-} \\pi^{0} )} $",
            "category": "Bu/DD",
            "average": 0.01679619330578614,
            "error": 0.0059384872785772525,
            "measurements": [
                {
                    "value": 0.0119,
                    "error": 0.0075057776369821545
                },
                {
                    "value": 0.027000000000000003,
                    "error": 0.014616095626012765
                }
            ]
        },
        {
            "name": "BR_B-_DS-_D0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{*-}(2010) D^{0} ) $",
            "category": "Bu/DD",
            "average": 0.0039260096735188555,
            "error": 0.0005234308424576762,
            "measurements": [
                {
                    "value": 0.00459,
                    "error": 0.001070327052820772
                },
                {
                    "value": 0.0036000000000000003,
                    "error": 0.000752994023880668
                }
            ]
        },
        {
            "name": "BR_B-_DsJ-2460_DS0.BR_DsJ-2460_Ds-_gamma",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to D_{sJ}(2460)^{-} D^{*}(2007)^{0} )\\times {\\cal{B}} ( D_{sJ}(2460)^{-} \\to D_s^{-} \\gamma )} $",
            "category": "Bu/DD",
            "average": 0.013999999999999999,
            "error": 0.00645089600983559,
            "measurements": [
                {
                    "value": 0.013999999999999999,
                    "error": 0.00818812697041983
                }
            ]
        },
        {
            "name": "BR_B-_DS-_DS0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{*}(2007)^{0} D^{*}(2010)^{-} ) $",
            "category": "Bu/DD",
            "average": 0.0081,
            "error": 0.0017281203661782363,
            "measurements": [
                {
                    "value": 0.0081,
                    "error": 0.0021290373411474023
                }
            ]
        },
        {
            "name": "BR_B-_D1s-_DS0bar.BR_D1s-_DS0bar_K-",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to D_{s1}(2536)^{-} \\bar{D}^{*}(2007)^{0} )\\times {\\cal{B}} ( D_{s1}(2536)^{-} \\to \\bar{D}^{*}(2007)^{0} K^{-} )} $",
            "category": "Bu/DD",
            "average": 0.0054600000000000004,
            "error": 0.0015654072952429993,
            "measurements": [
                {
                    "value": 0.0054600000000000004,
                    "error": 0.0018793881983241252
                }
            ]
        },
        {
            "name": "BR_B+_D0bar_D1s+.BR_D1s+_DS_K",
            "latex": "$ {{\\cal{B}} ( B^{+} \\to D_{s1}(2536)^{+} \\bar{D}^{0} )\\times {\\cal{B}} ( D_{s1}(2536)^{+} \\to D^{*}(2007)^{0} K^{+} + D^{*}(2010)^{+} K^{0} )} $",
            "category": "Bu/DD",
            "average": 0.0039700000000000004,
            "error": 0.001017889974407843,
            "measurements": [
                {
                    "value": 0.0039700000000000004,
                    "error": 0.0011617658972443632
                }
            ]
        },
        {
            "name": "BR_B-_DsJS-2317_D0.BR_DsJS-2317_Ds-_pi0",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to D^{0} D_{sJ}^{*}(2317)^{-} )\\times {\\cal{B}} ( D_{sJ}^{*}(2317)^{-} \\to D_s^{-} \\pi^{0} )} $",
            "category": "Bu/DD",
            "average": 0.008293121513843564,
            "error": 0.001468183898707838,
            "measurements": [
                {
                    "value": 0.0081,
                    "error": 0.004433475174801369
                },
                {
                    "value": 0.008,
                    "error": 0.002074630674005503
                },
                {
                    "value": 0.01,
                    "error": 0.005458168733921336
                }
            ]
        },
        {
            "name": "BR_B-_DS0bar_K-_D0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{0} \\bar{D}^{*}(2007)^{0} K^{-} ) $",
            "category": "Bu/DD",
            "average": 0.0632,
            "error": 0.004884669896727926,
            "measurements": [
                {
                    "value": 0.0632,
                    "error": 0.006641535966928133
                }
            ]
        },
        {
            "name": "BR_B-_DS-_K0bar_DS0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D^{*}(2007)^{0} D^{*}(2010)^{-} \\bar{K}^{0} ) $",
            "category": "Bu/DD",
            "average": 0.0917,
            "error": 0.012242957159118053,
            "measurements": [
                {
                    "value": 0.0917,
                    "error": 0.015195064988344078
                }
            ]
        },
        {
            "name": "BR_B-_DsJS-2317_DS0.BR_DsJS-2317_Ds-_pi0",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to D_{sJ}^{*}(2317)^{-} D^{*}(2007)^{0} )\\times {\\cal{B}} ( D_{sJ}^{*}(2317)^{-} \\to D_s^{-} \\pi^{0} )} $",
            "category": "Bu/DD",
            "average": 0.009000000000000001,
            "error": 0.006809228399594875,
            "measurements": [
                {
                    "value": 0.009000000000000001,
                    "error": 0.007542555212469895
                }
            ]
        },
        {
            "name": "BR_B-_DSs-_D0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to D_s^{*-} D^{0} ) $",
            "category": "Bu/DD",
            "average": 0.09300000000000001,
            "error": 0.026172504656604458,
            "measurements": [
                {
                    "value": 0.09300000000000001,
                    "error": 0.03234192325759246
                }
            ]
        },
        {
            "name": "BR_B-_KS-_chi1c",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\chi_{c1} K^{*}(892)^{-} ) $",
            "category": "Bu/cc",
            "average": 0.002982016822978241,
            "error": 0.000509017592555805,
            "measurements": [
                {
                    "value": 0.0040999999999999995,
                    "error": 0.001407124727947029
                },
                {
                    "value": 0.0026000000000000003,
                    "error": 0.000754983443527075
                },
                {
                    "value": 0.00294,
                    "error": 0.0016517869111964776
                }
            ]
        },
        {
            "name": "BR_B-_K-_psi2S.BR_psi2S_chi1c_gamma",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\psi(2S) K^{-} )\\times {\\cal{B}} ( \\psi(2S) \\to \\chi_{c1} \\gamma ) $",
            "category": "Bu/cc",
            "average": 0.0077,
            "error": 0.0012041594578792295,
            "measurements": [
                {
                    "value": 0.0077,
                    "error": 0.0015033296378372909
                }
            ]
        },
        {
            "name": "BR_B-_K1-_Jpsi",
            "latex": "$ {\\cal{B}} ( B^{-} \\to J/\\psi K_1(1270)^{-} ) $",
            "category": "Bu/cc",
            "average": 0.018000000000000002,
            "error": 0.0045349050162065,
            "measurements": [
                {
                    "value": 0.018000000000000002,
                    "error": 0.005984145720150872
                }
            ]
        },
        {
            "name": "BR_B-_pi-_chi1c.-BR_B-_K-_chi1c",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to \\chi_{c1} \\pi^{-} )}{{\\cal{B}} ( B^{-} \\to \\chi_{c1} K^{-} )} $",
            "category": "Bu/cc",
            "average": 0.43,
            "error": 0.08544003745312574,
            "measurements": [
                {
                    "value": 0.43,
                    "error": 0.09055385138137417
                }
            ]
        },
        {
            "name": "BR_B-_K-_psi2S",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\psi(2S) K^{-} ) $",
            "category": "Bu/cc",
            "average": 0.0063140069398697676,
            "error": 0.0003372024205625329,
            "measurements": [
                {
                    "value": 0.006900000000000001,
                    "error": 0.0006
                },
                {
                    "value": 0.0064,
                    "error": 0.0011489125293076055
                },
                {
                    "value": 0.0055,
                    "error": 0.0013114877048604002
                },
                {
                    "value": 0.004900000000000001,
                    "error": 0.0016970562748477142
                },
                {
                    "value": 0.00617,
                    "error": 0.0006664082832618455
                }
            ]
        },
        {
            "name": "BR_B-_K-_etac.BR_etac_pi+_K0_K+",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to K^{-} \\eta_c )\\times {\\cal{B}} ( \\eta_c \\to K^{0} K^{+} \\pi^{+} )} $",
            "category": "Bu/cc",
            "average": 2.6704269547012023e-06,
            "error": 3.084103898140466e-07,
            "measurements": [
                {
                    "value": 2.67e-06,
                    "error": 6.412756756958254e-07
                }
            ]
        },
        {
            "name": "BR_B-_KS-_chi2c",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\chi_{c2} K^{*}(892)^{-} ) $",
            "category": "Bu/cc",
            "average": 0.00011000000000000002,
            "error": 0.0006981403870282822,
            "measurements": [
                {
                    "value": 0.00011000000000000002,
                    "error": 0.0008887631855561976
                }
            ]
        },
        {
            "name": "BR_B-_K-_chi0c",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\chi_{c0} K^{-} ) $",
            "category": "Bu/cc",
            "average": 0.0019050498236852789,
            "error": 0.00027774686501167535,
            "measurements": [
                {
                    "value": 0.006,
                    "error": 0.002366373034399164
                },
                {
                    "value": 0.002,
                    "error": 0.00091104335791443
                },
                {
                    "value": 0.0027,
                    "error": 0.0007
                },
                {
                    "value": 0.00134,
                    "error": 0.000516817182376902
                },
                {
                    "value": 0.00184,
                    "error": 0.0005462600113499066
                }
            ]
        },
        {
            "name": "ACP_B-_Jpsi_rho-",
            "latex": "$ A_\\mathrm{CP} ( B^{-} \\to J/\\psi  \\rho^{-}(770) ) $",
            "category": "Bu/cc",
            "average": -0.05380652338896157,
            "error": 0.05324364985741772,
            "measurements": [
                {
                    "value": -0.045,
                    "error": 0.05762169416570667
                },
                {
                    "value": -0.11,
                    "error": 0.1649242250247064
                }
            ]
        },
        {
            "name": "BR_B-_KS-_chi1c.-BR_B-_K-_chi1c",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to \\chi_{c1} K^{*}(892)^{-} )}{{\\cal{B}} ( B^{-} \\to \\chi_{c1} K^{-} )} $",
            "category": "Bu/cc",
            "average": 0.51,
            "error": 0.23345235061601963,
            "measurements": [
                {
                    "value": 0.51,
                    "error": 0.2830194339616981
                }
            ]
        },
        {
            "name": "BR_B-_K-_psi2S.BR_psi2S_chi2c_gamma",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\psi(2S) K^{-} )\\times {\\cal{B}} ( \\psi(2S) \\to \\chi_{c2} \\gamma ) $",
            "category": "Bu/cc",
            "average": 0.0063,
            "error": 0.001081665382639196,
            "measurements": [
                {
                    "value": 0.0063,
                    "error": 0.0012369316876852982
                }
            ]
        },
        {
            "name": "BR_B-_K-_etac.BR_etac_pbar_p.-BR_B-_K-_Jpsi.-BR_Jpsi_pbar_p",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to \\eta_c K^{-} ) \\times {\\cal{B}} ( \\eta_c \\to p\\bar{p} ) }{ {\\cal{B}} ( B^{-} \\to J/\\psi K^{-} ) \\times {\\cal{B}} ( J/\\psi \\to p\\bar{p} )} $",
            "category": "Bu/cc",
            "average": 0.5835049302087895,
            "error": 0.04327251265316851,
            "measurements": [
                {
                    "value": 0.578,
                    "error": 0.051797683345879475
                },
                {
                    "value": 0.71,
                    "error": 0.22315913604421397
                }
            ]
        },
        {
            "name": "BR_B-_KS-_Jpsi.-BR_B-_K-_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to J/\\psi K^{*}(892)^{-} )}{{\\cal{B}} ( B^{-} \\to J/\\psi K^{-} )} $",
            "category": "Bu/cc",
            "average": 1.3823051785886413,
            "error": 0.09327850683421655,
            "measurements": [
                {
                    "value": 1.92,
                    "error": 0.6463745044476924
                },
                {
                    "value": 1.37,
                    "error": 0.12369316876852982
                }
            ]
        },
        {
            "name": "BR_B-_K-_pi+_pi-_chi2c",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\chi_{c2} K^{-} \\pi^{+} \\pi^{-}) $",
            "category": "Bu/cc",
            "average": 0.00134,
            "error": 0.00019235384061671348,
            "measurements": [
                {
                    "value": 0.00134,
                    "error": 0.00021236760581595302
                }
            ]
        },
        {
            "name": "BR_B-_K-_etac.BR_etac_Lambda0bar_Lambda0",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to \\eta_c K^{-} )\\times {\\cal{B}} ( \\eta_c \\to \\Lambda \\bar{\\Lambda} )} $",
            "category": "Bu/cc",
            "average": 9.5e-06,
            "error": 2.5382544599085707e-06,
            "measurements": [
                {
                    "value": 9.5e-06,
                    "error": 2.7192616319319724e-06
                }
            ]
        },
        {
            "name": "BR_B-_K-_etac.BR_etac_pbar_p",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to \\eta_c K^{-} )\\times {\\cal{B}} ( \\eta_c \\to p \\bar{p} )} $",
            "category": "Bu/cc",
            "average": 1.5488942218383757e-05,
            "error": 1.5736723012772653e-06,
            "measurements": [
                {
                    "value": 1.4200000000000001e-05,
                    "error": 2.7753736530902647e-06
                },
                {
                    "value": 1.8e-05,
                    "error": 3.7936036203777076e-06
                }
            ]
        },
        {
            "name": "BR_B-_K-_pi-_pi+_Jpsi",
            "latex": "$ {\\cal{B}} ( B^{-} \\to J/\\psi K^{-} \\pi^{+} \\pi^{-} ) $",
            "category": "Bu/cc",
            "average": 0.008071607646505668,
            "error": 0.0005208892427946339,
            "measurements": [
                {
                    "value": 0.0071600000000000006,
                    "error": 0.0008544003745317531
                },
                {
                    "value": 0.006900000000000001,
                    "error": 0.0024738633753705963
                },
                {
                    "value": 0.0116,
                    "error": 0.0014525839046333952
                }
            ]
        },
        {
            "name": "BR_B-_K-_psi3770",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\psi(3770) K^{-} ) $",
            "category": "Bu/cc",
            "average": 0.002605972174070501,
            "error": 0.0008922285642119452,
            "measurements": [
                {
                    "value": 0.0048,
                    "error": 0.0014798648586948743
                },
                {
                    "value": -0.0002,
                    "error": 0.0014
                },
                {
                    "value": 0.0035,
                    "error": 0.002535744466621193
                }
            ]
        },
        {
            "name": "BR_B-_K0bar_pi-_chi2c",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\chi_{c2} \\bar{K}^{0} \\pi^{-} ) $",
            "category": "Bu/cc",
            "average": 0.00116,
            "error": 0.00025059928172283327,
            "measurements": [
                {
                    "value": 0.00116,
                    "error": 0.0002778488797889961
                }
            ]
        },
        {
            "name": "BR_B-_KS-_psi2S.-BR_B-_K-_psi2S",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to \\psi(2S) K^{*}(892)^{-} )}{{\\cal{B}} ( B^{-} \\to \\psi(2S) K^{-} )} $",
            "category": "Bu/cc",
            "average": 0.96,
            "error": 0.17492855684788766,
            "measurements": [
                {
                    "value": 0.96,
                    "error": 0.19672315572906002
                }
            ]
        },
        {
            "name": "BR_B-_K-_omega_Jpsi",
            "latex": "$ {\\cal{B}} ( B^{-} \\to J/\\psi \\omega(782) K^{-} ) $",
            "category": "Bu/cc",
            "average": 0.0032,
            "error": 0.0004621351782785468,
            "measurements": [
                {
                    "value": 0.0032,
                    "error": 0.0006451451344429102
                }
            ]
        },
        {
            "name": "BR_B-_K-_psi2S.-BR_B-_K-_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to \\psi(2S) K^{-} ) }{ {\\cal{B}} ( B^{-} \\to J/\\psi K^{-} )} $",
            "category": "Bu/cc",
            "average": 0.598589329709864,
            "error": 0.01848503754019331,
            "measurements": [
                {
                    "value": 0.594,
                    "error": 0.027802877548915687
                },
                {
                    "value": 0.65,
                    "error": 0.091104335791443
                }
            ]
        },
        {
            "name": "BR_B-_K-_chi1c",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\chi_{c1} K^{-} ) $",
            "category": "Bu/cc",
            "average": 0.004893904899477537,
            "error": 0.00018707650865001688,
            "measurements": [
                {
                    "value": 0.0045000000000000005,
                    "error": 0.0010099504938362077
                },
                {
                    "value": 0.004940000000000001,
                    "error": 0.0004794788837894741
                },
                {
                    "value": 0.0058,
                    "error": 0.0011445523142259598
                },
                {
                    "value": 0.0155,
                    "error": 0.006095900261651269
                },
                {
                    "value": 0.004900000000000001,
                    "error": 0.0006000000000000001
                },
                {
                    "value": 0.0045000000000000005,
                    "error": 0.0004358898943540673
                },
                {
                    "value": 0.008,
                    "error": 0.0017146428199482247
                },
                {
                    "value": 0.00579,
                    "error": 0.0009553009996854395
                }
            ]
        },
        {
            "name": "BR_B-_K1-_Jpsi.-BR_B-_K-_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to J/\\psi K_1(1270)^{-} )}{{\\cal{B}} ( B^{-} \\to J/\\psi K^{-} )} $",
            "category": "Bu/cc",
            "average": 1.8,
            "error": 0.48083261116075027,
            "measurements": [
                {
                    "value": 1.8,
                    "error": 0.5888972745734183
                }
            ]
        },
        {
            "name": "BR_B-_K-_etac",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\eta_c K^{-} ) $",
            "category": "Bu/cc",
            "average": 0.011776264614946304,
            "error": 0.0006708469557338124,
            "measurements": [
                {
                    "value": 0.0125,
                    "error": 0.0043402108989627364
                },
                {
                    "value": 0.012,
                    "error": 0.0012727922061357855
                },
                {
                    "value": 0.0138,
                    "error": 0.005087994520007849
                },
                {
                    "value": 0.0087,
                    "error": 0.0015
                },
                {
                    "value": 0.0129,
                    "error": 0.004141255848169731
                }
            ]
        },
        {
            "name": "BR_B-_KS-_chi0c",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\chi_{c0} K^{*}(892)^{-} ) $",
            "category": "Bu/cc",
            "average": 0.0014,
            "error": 0.0005385164807134504,
            "measurements": [
                {
                    "value": 0.0014,
                    "error": 0.0005744562646538028
                }
            ]
        },
        {
            "name": "BR_B-_K-_Jpsi.BR_Jpsi_Lambda0bar_Lambda0",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to J/\\psi K^{-} )\\times {\\cal{B}} ( J/\\psi \\to \\Lambda \\bar{\\Lambda} )} $",
            "category": "Bu/cc",
            "average": 2e-05,
            "error": 4.629240010766361e-06,
            "measurements": [
                {
                    "value": 2e-05,
                    "error": 5.7520654011403836e-06
                }
            ]
        },
        {
            "name": "BR_B-_K-_etac2S",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\eta_c(2S) K^{-} ) $",
            "category": "Bu/cc",
            "average": 0.004406911447084111,
            "error": 0.000966948396174229,
            "measurements": [
                {
                    "value": 0.0048,
                    "error": 0.0011789826122551596
                },
                {
                    "value": 0.0034,
                    "error": 0.001849324200890693
                }
            ]
        },
        {
            "name": "BR_B-_pi-_chi1c",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\chi_{c1} \\pi^{-} ) $",
            "category": "Bu/cc",
            "average": 0.00022000000000000003,
            "error": 4.999999999999996e-05,
            "measurements": [
                {
                    "value": 0.00022000000000000003,
                    "error": 5.8309518948453004e-05
                }
            ]
        },
        {
            "name": "BR_B-_K-_psi3770.BR_psi3770_D0bar_D0",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to \\psi(3770) K^{-} )\\times {\\cal{B}} ( \\psi(3770) \\to D^{0} \\bar{D}^{0} )} $",
            "category": "Bu/cc",
            "average": 0.00141,
            "error": 0.0003720215047547658,
            "measurements": [
                {
                    "value": 0.00141,
                    "error": 0.00043220365569948617
                }
            ]
        },
        {
            "name": "BR_B-_pi-_psi2S",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\psi(2S) \\pi^{-} ) $",
            "category": "Bu/cc",
            "average": 0.000252,
            "error": 3.0016662039607274e-05,
            "measurements": [
                {
                    "value": 0.000252,
                    "error": 3.3555923471125036e-05
                }
            ]
        },
        {
            "name": "BR_B-_K-_Jpsi",
            "latex": "$ {\\cal{B}} ( B^{-} \\to J/\\psi K^{-} ) $",
            "category": "Bu/cc",
            "average": 0.010044657232388891,
            "error": 0.00032500836956921264,
            "measurements": [
                {
                    "value": 0.0101,
                    "error": 0.0010295630140987001
                },
                {
                    "value": 0.0089,
                    "error": 0.0009273618495495703
                },
                {
                    "value": 0.0101,
                    "error": 0.0012369316876852982
                },
                {
                    "value": 0.0081,
                    "error": 0.0016340134638368193
                },
                {
                    "value": 0.01061,
                    "error": 0.0006649060083951716
                }
            ]
        },
        {
            "name": "ACP_B-_Jpsi_pi-",
            "latex": "$ A_\\mathrm{CP} ( B^{-} \\to J/\\psi \\pi^{-} ) $",
            "category": "Bu/cc",
            "average": -0.42000000000000004,
            "error": 0.449110231399342,
            "measurements": [
                {
                    "value": -0.42000000000000004,
                    "error": 0.4580392996239515
                }
            ]
        },
        {
            "name": "BR_B-_K-_chi0c.-BR_B-_K-_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to \\chi_{c0} K^{-} )}{{\\cal{B}} ( B^{-} \\to J/\\psi K^{-} )} $",
            "category": "Bu/cc",
            "average": 0.6006377912970293,
            "error": 0.20752196106618798,
            "measurements": [
                {
                    "value": 0.6,
                    "error": 0.2224344375761792
                }
            ]
        },
        {
            "name": "BR_B-_K-_psi2S.BR_psi2S_pbar_p.-BR_B-_K-_Jpsi.-BR_Jpsi_pbar_p",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to \\psi(2S) K^{-} ) \\times {\\cal{B}} ( \\psi(2S) \\to p\\bar{p} ) }{ {\\cal{B}} ( B^{-} \\to J/\\psi K^{-} ) \\times {\\cal{B}} ( J/\\psi \\to p\\bar{p} )} $",
            "category": "Bu/cc",
            "average": 0.08,
            "error": 0.015000000000000051,
            "measurements": [
                {
                    "value": 0.08,
                    "error": 0.017492855684535902
                }
            ]
        },
        {
            "name": "BR_B-_KS-_psi2S",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\psi(2S) K^{*}(892)^{-} ) $",
            "category": "Bu/cc",
            "average": 0.005919996758417558,
            "error": 0.0012091732728778987,
            "measurements": [
                {
                    "value": 0.00592,
                    "error": 0.0015000333329629712
                }
            ]
        },
        {
            "name": "BR_B-_K-_eta_Jpsi",
            "latex": "$ {\\cal{B}} ( B^{-} \\to J/\\psi \\eta K^{-} ) $",
            "category": "Bu/cc",
            "average": 0.0012358648849314332,
            "error": 0.00014090564254409847,
            "measurements": [
                {
                    "value": 0.00127,
                    "error": 0.0001905255888325765
                },
                {
                    "value": 0.00108,
                    "error": 0.0004110960958218893
                }
            ]
        },
        {
            "name": "BR_B-_K-_phi_psi2S",
            "latex": "$ {\\cal{B}} (B^{-} \\to \\psi(2S) \\phi(1020) K^{-}) $",
            "category": "Bu/cc",
            "average": 4.000000000000001e-05,
            "error": 7.21111249555872e-06,
            "measurements": [
                {
                    "value": 4e-05,
                    "error": 9.59166304662544e-06
                }
            ]
        },
        {
            "name": "BR_B-_K-_phi_Jpsi",
            "latex": "$ {\\cal{B}} ( B^{-} \\to J/\\psi \\phi(1020) K^{-} ) $",
            "category": "Bu/cc",
            "average": 0.00044000000000000007,
            "error": 0.00014866086625406235,
            "measurements": [
                {
                    "value": 0.00044000000000000007,
                    "error": 0.0001571623364550171
                }
            ]
        },
        {
            "name": "BR_B-_K-_chi2c",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\chi_{c2} K^{-} ) $",
            "category": "Bu/cc",
            "average": 0.0001082365895293356,
            "error": 3.0796766973093496e-05,
            "measurements": [
                {
                    "value": 0.00011100000000000001,
                    "error": 3.724401795270814e-05
                },
                {
                    "value": 0.0001,
                    "error": 6.164414002968977e-05
                }
            ]
        },
        {
            "name": "BR_B-_K-_etac.-BR_B-_K-_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to \\eta_c K^{-} )}{{\\cal{B}} ( B^{-} \\to J/\\psi K^{-} )} $",
            "category": "Bu/cc",
            "average": 1.1173958831893525,
            "error": 0.20070245238115003,
            "measurements": [
                {
                    "value": 1.06,
                    "error": 0.23685438564654024
                },
                {
                    "value": 1.28,
                    "error": 0.5466260147486579
                }
            ]
        },
        {
            "name": "BR_B-_pi-_Jpsi",
            "latex": "$ {\\cal{B}} ( B^{-} \\to J/\\psi \\pi^{-} ) $",
            "category": "Bu/cc",
            "average": 0.0004038736213794731,
            "error": 1.6910664836344786e-05,
            "measurements": [
                {
                    "value": 0.000388,
                    "error": 2.389560629069704e-05
                },
                {
                    "value": 0.00038,
                    "error": 7.348469228349534e-05
                },
                {
                    "value": 0.000537,
                    "error": 5.63648826841678e-05
                }
            ]
        },
        {
            "name": "BR_B-_pi-_Jpsi.-BR_B-_K-_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to J/\\psi \\pi^{-} )}{{\\cal{B}} ( B^{-} \\to J/\\psi K^{-} )} $",
            "category": "Bu/cc",
            "average": 0.054750191973078455,
            "error": 0.004491371044014733,
            "measurements": [
                {
                    "value": 0.05,
                    "error": 0.018055640496244817
                },
                {
                    "value": 0.48600000000000004,
                    "error": 0.08469946871143881
                },
                {
                    "value": 0.0537,
                    "error": 0.004761302342846965
                }
            ]
        },
        {
            "name": "BR_B-_K-_Jpsi.BR_Jpsi_pbar_p",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to J/\\psi K^{-} )\\times {\\cal{B}} ( J/\\psi \\to p \\bar{p} )} $",
            "category": "Bu/cc",
            "average": 2.206501953076623e-05,
            "error": 1.3225069782092732e-06,
            "measurements": [
                {
                    "value": 2.2100000000000002e-05,
                    "error": 1.9209372712298546e-06
                },
                {
                    "value": 2.2000000000000003e-05,
                    "error": 2.449489742783179e-06
                }
            ]
        },
        {
            "name": "BR_B-_K-_psi3770.BR_psi3770_D-_D+",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to \\psi(3770) K^{-} )\\times {\\cal{B}} ( \\psi(3770) \\to D^{+} D^{-} )} $",
            "category": "Bu/cc",
            "average": 0.0008399999999999999,
            "error": 0.00038275318418009305,
            "measurements": [
                {
                    "value": 0.00084,
                    "error": 0.0004365775990588615
                }
            ]
        },
        {
            "name": "BR_B-_pbar_Jpsi_Lambda0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to J/\\psi \\Lambda \\bar{p} ) $",
            "category": "Bu/cc",
            "average": 0.00011600000000000001,
            "error": 3.070428531080927e-05,
            "measurements": [
                {
                    "value": 0.000116,
                    "error": 4.0380151662299435e-05
                },
                {
                    "value": 0.000116,
                    "error": 7.684283384928403e-05
                }
            ]
        },
        {
            "name": "BR_B-_KS-_etac",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\eta_c K^{*}(892)^{-} ) $",
            "category": "Bu/cc",
            "average": 0.012099172671760184,
            "error": 0.0049831142949800615,
            "measurements": [
                {
                    "value": 0.0121,
                    "error": 0.00798414159658234
                }
            ]
        },
        {
            "name": "BR_B-_K-_etac2S.BR_etac2S_K-_pi+_K0",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to K^{-} \\eta_c(2S) )\\times {\\cal{B}} ( \\eta_c(2S) \\to K^{0} K^{-} \\pi^{+} )} $",
            "category": "Bu/cc",
            "average": 3.4000000000000003e-07,
            "error": 1.9038735298291752e-07,
            "measurements": [
                {
                    "value": 3.4000000000000003e-07,
                    "error": 1.956982977923204e-07
                }
            ]
        },
        {
            "name": "BR_B-_KS-_Jpsi",
            "latex": "$ {\\cal{B}} ( B^{-} \\to J/\\psi K^{*}(892)^{-} ) $",
            "category": "Bu/cc",
            "average": 0.014044923196644738,
            "error": 0.0008614378330427384,
            "measurements": [
                {
                    "value": 0.0128,
                    "error": 0.002109502310972899
                },
                {
                    "value": 0.0158,
                    "error": 0.006055575942881073
                },
                {
                    "value": 0.014539999999999999,
                    "error": 0.0014319916200872128
                }
            ]
        },
        {
            "name": "BR_B-_K0bar_pi-_chi1c.-BR_B-_K0bar_pi-_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to \\chi_{c1} \\bar{K}^{0} \\pi^{-} ) }{ {\\cal{B}} ( B^{-} \\to J/\\psi \\bar{K}^{0} \\pi^{-} )} $",
            "category": "Bu/cc",
            "average": 5.01,
            "error": 0.6000833276525378,
            "measurements": [
                {
                    "value": 5.01,
                    "error": 0.814002456998749
                }
            ]
        },
        {
            "name": "BR_B-_K0bar_pi-_chi1c",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\chi_{c1} \\bar{K}^{0} \\pi^{-} ) $",
            "category": "Bu/cc",
            "average": 0.005685870100050207,
            "error": 0.00035014231273412745,
            "measurements": [
                {
                    "value": 0.00575,
                    "error": 0.0005219195340279956
                },
                {
                    "value": 0.00552,
                    "error": 0.0009009994450608724
                }
            ]
        },
        {
            "name": "BR_B-_rho-_Jpsi",
            "latex": "$ {\\cal{B}} ( B^{-} \\to J/\\psi \\rho^{-}(770) ) $",
            "category": "Bu/cc",
            "average": 0.0004097875765840939,
            "error": 3.764759718270977e-05,
            "measurements": [
                {
                    "value": 0.00038100000000000005,
                    "error": 5.5230886344973665e-05
                },
                {
                    "value": 0.0005,
                    "error": 8.185352771872449e-05
                }
            ]
        },
        {
            "name": "BR_B-_K-_pi+_pi-_chi1c",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\chi_{c1} K^{-} \\pi^{+} \\pi^{-}) $",
            "category": "Bu/cc",
            "average": 0.0037400000000000003,
            "error": 0.0003,
            "measurements": [
                {
                    "value": 0.0037400000000000003,
                    "error": 0.0003841874542459709
                }
            ]
        },
        {
            "name": "ACP_B-_Jpsi_K-",
            "latex": "$ A_\\mathrm{CP} ( B^{-} \\to J/\\psi K^{-} ) $",
            "category": "Bu/cc",
            "average": 0.059,
            "error": 0.036674241641783754,
            "measurements": [
                {
                    "value": 0.059,
                    "error": 0.037336309405188936
                }
            ]
        },
        {
            "name": "BR_B-_K-_pi0_chi1c",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\chi_{c1} K^{-} \\pi^{0}) $",
            "category": "Bu/cc",
            "average": 0.00329,
            "error": 0.0003466987164671946,
            "measurements": [
                {
                    "value": 0.00329,
                    "error": 0.00039534794801541595
                }
            ]
        },
        {
            "name": "BR_B-_K-_pi-_pi+_psi2S",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\psi(2S) K^{-} \\pi^{+} \\pi^{-} ) $",
            "category": "Bu/cc",
            "average": 0.00431,
            "error": 0.0005385164807134503,
            "measurements": [
                {
                    "value": 0.00431,
                    "error": 0.0007348469228349534
                }
            ]
        },
        {
            "name": "BR_B-_pbar_Sigmac0",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\Sigma_c^{0} \\bar{p} ) $",
            "category": "Bu/baryon",
            "average": 0.00045000000000000004,
            "error": 0.00026507167110421996,
            "measurements": [
                {
                    "value": 0.00045000000000000004,
                    "error": 0.0002995982110551677
                }
            ]
        },
        {
            "name": "BR_B-_Lambdac-_Xic02930.BR_Xic02930_Lambdac+_K-",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to \\Xi_c^{0}(2930) \\Lambda_c^{-} )\\times {\\cal{B}} ( \\Xi_c^{0}(2930) \\to \\Lambda_c^{+} K^{-} )} $",
            "category": "Bu/baryon",
            "average": 0.00173,
            "error": 0.0004965883607174057,
            "measurements": [
                {
                    "value": 0.00173,
                    "error": 0.000539166022668343
                }
            ]
        },
        {
            "name": "BR_B-_Lambdac-_K-_Lambdac+",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\Lambda_c^{+} \\Lambda_c^{-} K^{-} ) $",
            "category": "Bu/baryon",
            "average": 0.004947539597074872,
            "error": 0.0007192052701662079,
            "measurements": [
                {
                    "value": 0.006500000000000001,
                    "error": 0.005142461928020372
                },
                {
                    "value": 0.0048,
                    "error": 0.0009512623192369179
                },
                {
                    "value": 0.011399999999999999,
                    "error": 0.008945948803788227
                }
            ]
        },
        {
            "name": "BR_B-_pbar_Sigmac02800.-BR_B-_pbar_pi-_Lambdac+",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to \\Sigma_{c}(2800)^{0} \\bar{p} )}{{\\cal{B}} ( B^{-} \\to \\Lambda_c^{+} \\bar{p} \\pi^{-} )} $",
            "category": "Bu/baryon",
            "average": 1.17,
            "error": 0.3324154028588002,
            "measurements": [
                {
                    "value": 1.17,
                    "error": 0.41
                }
            ]
        },
        {
            "name": "BR_B-_Lambdac-_Xic0.BR_Xic0_pi+_Xi-",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to \\Xi_c^{0} \\Lambda_c^{-} )\\times {\\cal{B}} ( \\Xi_c^{0} \\to \\Xi^{-} \\pi^{+} )} $",
            "category": "Bu/baryon",
            "average": 0.00025799757710267586,
            "error": 8.049944419070127e-05,
            "measurements": [
                {
                    "value": 0.00048,
                    "error": 0.0002490910749231941
                },
                {
                    "value": 0.00020800000000000001,
                    "error": 0.00010834666584625484
                }
            ]
        },
        {
            "name": "BR_B-_pbar_pi-_Lambdac+.-BR_B0bar_pbar_Lambdac+",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to \\Lambda_c^{+} \\bar{p} \\pi^{-} )}{{\\cal{B}} ( \\bar{B}^{0} \\to \\Lambda_c^{+} \\bar{p} )} $",
            "category": "Bu/baryon",
            "average": 15.4,
            "error": 1.8248287586654834,
            "measurements": [
                {
                    "value": 15.4,
                    "error": 1.8493242008906927
                }
            ]
        },
        {
            "name": "BR_B-_pbar_Sigmac02455.-BR_B-_pbar_pi-_Lambdac+",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to \\Sigma_{c}(2455)^{0} \\bar{p} )}{{\\cal{B}} ( B^{-} \\to \\Lambda_c^{+} \\bar{p} \\pi^{-} )} $",
            "category": "Bu/baryon",
            "average": 1.2300000000000002,
            "error": 0.1442220510184722,
            "measurements": [
                {
                    "value": 1.2300000000000002,
                    "error": 0.16492422502470644
                }
            ]
        },
        {
            "name": "BR_B-_pbar_pi-_Lambdac+",
            "latex": "$ {\\cal{B}} ( B^{-} \\to \\Lambda_c^{+} \\bar{p} \\pi^{-} ) $",
            "category": "Bu/baryon",
            "average": 0.0024573478406857948,
            "error": 0.0005545091397385977,
            "measurements": [
                {
                    "value": 0.0018700000000000001,
                    "error": 0.0008996677855655199
                },
                {
                    "value": 0.0033799999999999998,
                    "error": 0.0012617448236470004
                }
            ]
        },
        {
            "name": "BR_B-_Sigmac++_pbar_pi-_pi-",
            "latex": "$ {\\cal{B}}( B^{-} \\to \\Sigma_c^{++} \\bar{p} \\pi^{-} \\pi^{-} ) $",
            "category": "Bu/baryon",
            "average": 0.0029799999999999996,
            "error": 0.000800624756049924,
            "measurements": [
                {
                    "value": 0.00298,
                    "error": 0.0011208925015361642
                }
            ]
        },
        {
            "name": "BR_B-_K-_X4140.BR_X4140_phi_Jpsi.-BR_B-_K-_phi_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to X(4140) K^{-} ) \\times {\\cal{B}} ( X(4140) \\to J/\\psi \\phi(1020) )}{{\\cal{B}} ( B^{-} \\to J/\\psi \\phi(1020) K^{-} )} $",
            "category": "Bu/other",
            "average": 0.13565494103468878,
            "error": 0.04977244958429012,
            "measurements": [
                {
                    "value": 0.13,
                    "error": 0.058239112787078606
                },
                {
                    "value": 2.1,
                    "error": 0.9797958971132713
                }
            ]
        },
        {
            "name": "BR_B-_K-_Y3940.BR_Y3940_omega_Jpsi",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to Y(3940) K^{-} )\\times {\\cal{B}} ( Y(3940) \\to J/\\psi \\omega(782) )} $",
            "category": "Bu/other",
            "average": 0.00030000000000000003,
            "error": 7.654913220929229e-05,
            "measurements": [
                {
                    "value": 0.00030000000000000003,
                    "error": 8.649171799707866e-05
                }
            ]
        },
        {
            "name": "BR_B-_K-_X3872.BR_X3872_omega_Jpsi",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to X(3872) K^{-} )\\times {\\cal{B}} ( X(3872) \\to J/\\psi \\omega(782) )} $",
            "category": "Bu/other",
            "average": 6.000000000000001e-05,
            "error": 2.2360679774997905e-05,
            "measurements": [
                {
                    "value": 6e-05,
                    "error": 2.4494897427831785e-05
                }
            ]
        },
        {
            "name": "BR_B-_K-_X4274.BR_X4274_phi_Jpsi.-BR_B-_K-_phi_Jpsi",
            "latex": "$ \\frac{{\\cal{B}} ( B^{-} \\to X(4274) K^{-} ) \\times {\\cal{B}} ( X(4274) \\to J/\\psi \\phi(1020) )}{{\\cal{B}} ( B^{-} \\to J/\\psi \\phi(1020) K^{-} )} $",
            "category": "Bu/other",
            "average": 0.071,
            "error": 0.038832543594858125,
            "measurements": [
                {
                    "value": 0.071,
                    "error": 0.048803580174381536
                }
            ]
        },
        {
            "name": "BR_B-_K-_X3872.BR_X3872_gamma_Jpsi",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to X(3872) K^{-} )\\times {\\cal{B}} ( X(3872) \\to J/\\psi \\gamma )} $",
            "category": "Bu/other",
            "average": 2.1074687842994e-05,
            "error": 3.3521249091229423e-06,
            "measurements": [
                {
                    "value": 1.7800000000000002e-05,
                    "error": 4.903549636781891e-06
                },
                {
                    "value": 1.8e-05,
                    "error": 6.164414002968978e-06
                },
                {
                    "value": 3.3e-05,
                    "error": 1.0862780491200217e-05
                },
                {
                    "value": 2.8e-05,
                    "error": 8.124038404635963e-06
                }
            ]
        },
        {
            "name": "BR_B-_KS-_X3872.BR_X3872_gamma_Jpsi",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to X(3872) K^{*}(892)^{-} )\\times {\\cal{B}} ( X(3872) \\to J/\\psi \\gamma )} $",
            "category": "Bu/other",
            "average": 6.999999999999999e-06,
            "error": 2.6019223662515374e-05,
            "measurements": [
                {
                    "value": 7e-06,
                    "error": 2.6038433132583074e-05
                }
            ]
        },
        {
            "name": "BR_B-_K-_X3872.BR_X3872_pi-_pi+_Jpsi",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to K^{-} X(3872) )\\times {\\cal{B}} ( X(3872) \\to J/\\psi \\pi^{+} \\pi^{-} )} $",
            "category": "Bu/other",
            "average": 8.67348272262718e-05,
            "error": 7.018488516173634e-06,
            "measurements": [
                {
                    "value": 8.61e-05,
                    "error": 9.61873172512884e-06
                },
                {
                    "value": 0.000101,
                    "error": 2.8722813232690147e-05
                },
                {
                    "value": 8.400000000000001e-05,
                    "error": 1.7972200755611428e-05
                }
            ]
        },
        {
            "name": "BR_B-_K-_X3872.BR_X3872_DS0bar_D0",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to X(3872) K^{-} )\\times {\\cal{B}} ( X(3872) \\to \\bar{D}^{*}(2007)^{0} D^{0} )} $",
            "category": "Bu/other",
            "average": 0.0016699999999999998,
            "error": 0.0005920304046246273,
            "measurements": [
                {
                    "value": 0.00167,
                    "error": 0.0007559100475585703
                }
            ]
        },
        {
            "name": "BR_B-_K-_X3823.BR_X3823_chi1c_gamma",
            "latex": "$ {\\cal{B}} ( B^{-} \\to X(3823) K^{-} )\\times {\\cal{B}} ( X(3823) \\to \\chi_{c1} \\gamma ) $",
            "category": "Bu/other",
            "average": 9.7e-05,
            "error": 3.0083217912982655e-05,
            "measurements": [
                {
                    "value": 9.7e-05,
                    "error": 3.203123475609394e-05
                }
            ]
        },
        {
            "name": "BR_B-_K-_X3872.BR_X3872_gamma_psi2S",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to X(3872) K^{-} )\\times {\\cal{B}} ( X(3872) \\to \\psi(2S) \\gamma )} $",
            "category": "Bu/other",
            "average": 9.5e-05,
            "error": 2.765863337187867e-05,
            "measurements": [
                {
                    "value": 9.5e-05,
                    "error": 2.8301943396169813e-05
                }
            ]
        },
        {
            "name": "BR_B-_K-_X3915",
            "latex": "$ {\\cal{B}} ( B^{-} \\to X(3915) K^{-} ) $",
            "category": "Bu/other",
            "average": 0.00039999999999999996,
            "error": 0.0016000000000000007,
            "measurements": [
                {
                    "value": 0.0004,
                    "error": 0.0016
                }
            ]
        },
        {
            "name": "BR_B-_KS-_X3872.BR_X3872_gamma_psi2S",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to X(3872) K^{*}(892)^{-} )\\times {\\cal{B}} ( X(3872) \\to \\psi(2S) \\gamma )} $",
            "category": "Bu/other",
            "average": 6.400000000000001e-05,
            "error": 0.00013718600511714016,
            "measurements": [
                {
                    "value": 6.400000000000001e-05,
                    "error": 0.00016743954132760876
                }
            ]
        },
        {
            "name": "BR_B-_K-_Y4260.BR_Y4260_pi-_pi+_Jpsi",
            "latex": "$ {{\\cal{B}} ( B^{-} \\to Y(4260) K^{-} )\\times {\\cal{B}} ( Y(4260) \\to J/\\psi \\pi^{+} \\pi^{-} )} $",
            "category": "Bu/other",
            "average": 0.0002,
            "error": 7.28010988928052e-05,
            "measurements": [
                {
                    "value": 0.0002,
                    "error": 7.54983443527075e-05
                }
            ]
        },
        {
            "name": "BR_B-_K-_X3872",
            "latex": "$ {\\cal{B}} ( B^{-} \\to X(3872) K^{-} ) $",
            "category": "Bu/other",
            "average": 0.0012,
            "error": 0.0011045361017187258,
            "measurements": [
                {
                    "value": 0.0012,
                    "error": 0.0011090536506409416
                }
            ]
        },
        {
            "name": "R_psi",
            "latex": null,
            "category": "",
            "average": -0.1291292163799092,
            "error": 0.9925918074718091,
            "measurements": [
                {
                    "value": 0.594,
                    "error": 0.035411862419251545
                },
                {
                    "value": 0.476,
                    "error": 0.028
                },
                {
                    "value": 0.489,
                    "error": 0.04782258880487337
                },
                {
                    "value": 0.268,
                    "error": 0.03525620512760839
                },
                {
                    "value": 0.56,
                    "error": 0.11224972160321826
                },
                {
                    "value": 0.34,
                    "error": 0.0670820393249937
                }
            ]
        },
        {
            "name": "model",
            "latex": null,
            "category": "",
            "average": -0.003141980222186723,
            "error": 1.0000381196706383,
            "measurements": [
                {
                    "value": 4.51,
                    "error": 0.5520032083135777
                },
                {
                    "value": 8.3,
                    "error": 3.4309469656579212
                },
                {
                    "value": 0.0016100000000000003,
                    "error": 0.00031921779399024736
                },
                {
                    "value": 0.00281,
                    "error": 0.0008465813605318747
                },
                {
                    "value": 0.0034,
                    "error": 0.0012206555615733702
                },
                {
                    "value": 0.0060999999999999995,
                    "error": 0.002812472222085047
                },
                {
                    "value": 0.0068,
                    "error": 0.002395829710142188
                },
                {
                    "value": 0.0018000000000000002,
                    "error": 0.0006633249580710799
                },
                {
                    "value": 0.005,
                    "error": 0.0018654758106177627
                },
                {
                    "value": 2.67e-06,
                    "error": 8.527246877093939e-07
                },
                {
                    "value": 0.00215,
                    "error": 0.0005567764362830022
                },
                {
                    "value": 0.0006,
                    "error": 0.0004256759330758553
                },
                {
                    "value": 0.00319,
                    "error": 0.0007082372483850311
                },
                {
                    "value": 0.0012,
                    "error": 0.0006078651166171653
                },
                {
                    "value": 0.0035,
                    "error": 0.0006928203230275509
                },
                {
                    "value": 0.0068,
                    "error": 0.0029274562336608894
                }
            ]
        },
        {
            "name": "f_1_1295_BR",
            "latex": null,
            "category": "",
            "average": 0.0,
            "error": 1.0000029204059704,
            "measurements": [
                {
                    "value": 0.000714,
                    "error": 0.00018944030511020726
                },
                {
                    "value": 8.37e-05,
                    "error": 2.3359294276425637e-05
                },
                {
                    "value": 7.85e-05,
                    "error": 1.9194932698083337e-05
                },
                {
                    "value": 9.21e-06,
                    "error": 2.3831911379492836e-06
                }
            ]
        },
        {
            "name": "norm",
            "latex": null,
            "category": "",
            "average": 2.291620007111108,
            "error": 0.9624970457524182,
            "measurements": [
                {
                    "value": 1.2e-06,
                    "error": 2.048081054686396e-06
                },
                {
                    "value": 0.00846,
                    "error": 0.0007693503753167343
                },
                {
                    "value": 0.0016100000000000003,
                    "error": 0.000370135110466435
                },
                {
                    "value": 0.00281,
                    "error": 0.0008985543945694105
                },
                {
                    "value": 5.31e-05,
                    "error": 1.32143861000048e-05
                },
                {
                    "value": 0.00317,
                    "error": 0.0006475349857231832
                },
                {
                    "value": 0.5,
                    "error": 0.5356696593053643
                },
                {
                    "value": 0.33,
                    "error": 0.26798943950862786
                },
                {
                    "value": 2.07,
                    "error": 0.12190980272316088
                },
                {
                    "value": 0.0043,
                    "error": 0.000916515138991168
                },
                {
                    "value": 0.0028,
                    "error": 0.0011618950038622252
                },
                {
                    "value": 0.0005700000000000001,
                    "error": 0.00011090536506409417
                },
                {
                    "value": 0.000731,
                    "error": 6.967783004657939e-05
                },
                {
                    "value": 1.8700000000000004e-05,
                    "error": 1.1446540241334765e-05
                },
                {
                    "value": 0.305,
                    "error": 0.06009991680526688
                },
                {
                    "value": 0.135,
                    "error": 0.027
                },
                {
                    "value": 0.127,
                    "error": 0.027495454169735048
                },
                {
                    "value": 0.0008300000000000001,
                    "error": 0.0006174139616173254
                },
                {
                    "value": 0.00035,
                    "error": 0.00010862780491200216
                },
                {
                    "value": 0.049,
                    "error": 0.015459624833740308
                },
                {
                    "value": 0.11299999999999999,
                    "error": 0.03330165161069343
                },
                {
                    "value": 0.17500000000000002,
                    "error": 0.05394441583704471
                },
                {
                    "value": 0.338,
                    "error": 0.09814845897924226
                }
            ]
        },
        {
            "name": "PDG",
            "latex": null,
            "category": "",
            "average": 3.6553152032712775,
            "error": 0.9684204808740426,
            "measurements": [
                {
                    "value": 0.0016300000000000002,
                    "error": 0.0006973473577455773
                },
                {
                    "value": 0.0043,
                    "error": 0.0006840321629865075
                },
                {
                    "value": 0.0047,
                    "error": 0.0013
                },
                {
                    "value": 0.047,
                    "error": 0.012489995996796795
                },
                {
                    "value": 2.12,
                    "error": 0.30675723300355934
                },
                {
                    "value": 0.000202,
                    "error": 5.3329166503893535e-05
                },
                {
                    "value": 0.0091,
                    "error": 0.0012727922061357858
                },
                {
                    "value": 0.005730000000000001,
                    "error": 0.0009896969233053117
                },
                {
                    "value": 5.13,
                    "error": 0.39230090491866065
                },
                {
                    "value": 0.171,
                    "error": 0.034219877264537346
                },
                {
                    "value": 0.00472,
                    "error": 0.0014525494828060074
                },
                {
                    "value": 0.00061,
                    "error": 7.810249675906653e-05
                },
                {
                    "value": 0.043,
                    "error": 0.004193245485176683
                },
                {
                    "value": 0.00030000000000000003,
                    "error": 5.3851648071345046e-05
                },
                {
                    "value": 0.00037000000000000005,
                    "error": 7.745966692414833e-05
                }
            ]
        },
        {
            "name": "Br_B0bar",
            "latex": null,
            "category": "",
            "average": 0.001224598741333266,
            "error": 0.9999999996998274,
            "measurements": [
                {
                    "value": 0.00034,
                    "error": 0.0002500991695140814
                }
            ]
        },
        {
            "name": "f2bf",
            "latex": null,
            "category": "",
            "average": 0.0006448076149754487,
            "error": 0.9999997330035788,
            "measurements": [
                {
                    "value": 0.0016100000000000003,
                    "error": 0.00041484937025383086
                },
                {
                    "value": 0.00281,
                    "error": 0.0009476813810558905
                }
            ]
        },
        {
            "name": "BF",
            "latex": null,
            "category": "",
            "average": 0.0,
            "error": 0.9999977053925411,
            "measurements": [
                {
                    "value": 0.242,
                    "error": 0.029410882339705482
                },
                {
                    "value": 0.248,
                    "error": 0.03391164991562634
                },
                {
                    "value": 1.02,
                    "error": 0.12727922061357858
                }
            ]
        },
        {
            "name": "lifetime",
            "latex": null,
            "category": "",
            "average": 0.004483979491772013,
            "error": 0.9995087612343169,
            "measurements": [
                {
                    "value": 0.068,
                    "error": 0.013304134695650073
                }
            ]
        },
        {
            "name": "chic0_br_correlated",
            "latex": null,
            "category": "",
            "average": -0.0020894546509936055,
            "error": 1.000804589092823,
            "measurements": [
                {
                    "value": 0.6,
                    "error": 0.24166817823698516
                },
                {
                    "value": 0.00134,
                    "error": 0.0005560575509783137
                }
            ]
        },
        {
            "name": "brs_correlated",
            "latex": null,
            "category": "",
            "average": 0.001841254271243754,
            "error": 0.9999996164500845,
            "measurements": [
                {
                    "value": 0.006,
                    "error": 0.002627280956303828
                }
            ]
        },
        {
            "name": "D_br_correlated",
            "latex": null,
            "category": "",
            "average": 0.0021814776168968355,
            "error": 0.9999990369699377,
            "measurements": [
                {
                    "value": 0.0117,
                    "error": 0.004754252053641763
                }
            ]
        },
        {
            "name": "fs",
            "latex": null,
            "category": "",
            "average": 0.0005313658666206221,
            "error": 1.0001562916714501,
            "measurements": [
                {
                    "value": 0.00116,
                    "error": 0.0005272815093583349
                },
                {
                    "value": 0.00034,
                    "error": 0.00017471775252829756
                },
                {
                    "value": 0.0024,
                    "error": 0.0012894660831829908
                },
                {
                    "value": 0.024,
                    "error": 0.008088424970623705
                },
                {
                    "value": 0.085,
                    "error": 0.029282323057501263
                },
                {
                    "value": 0.11800000000000001,
                    "error": 0.04423544539314922
                }
            ]
        },
        {
            "name": "f_s",
            "latex": null,
            "category": "",
            "average": 0.03178953350561849,
            "error": 0.9996356690529397,
            "measurements": [
                {
                    "value": 0.0367,
                    "error": 0.010666611547677975
                }
            ]
        },
        {
            "name": "brs",
            "latex": null,
            "category": "",
            "average": -0.018837242378121427,
            "error": 0.9998475672532756,
            "measurements": [
                {
                    "value": 0.00029,
                    "error": 0.00012489995996796798
                },
                {
                    "value": 0.075,
                    "error": 0.018000000000000002
                }
            ]
        },
        {
            "name": "b_to_d_pi_br_correlated",
            "latex": null,
            "category": "",
            "average": -9.221007118245855e-06,
            "error": 1.0000124670436783,
            "measurements": [
                {
                    "value": 0.00204,
                    "error": 0.0006932532004974806
                },
                {
                    "value": 0.00383,
                    "error": 0.0006552098900352465
                }
            ]
        },
        {
            "name": "etac_br_correlated",
            "latex": null,
            "category": "",
            "average": 0.09165945826794726,
            "error": 1.029422862281155,
            "measurements": [
                {
                    "value": 0.0125,
                    "error": 0.005873401330524516
                },
                {
                    "value": 0.0123,
                    "error": 0.006336594271776394
                },
                {
                    "value": 0.016200000000000003,
                    "error": 0.009273616924138466
                },
                {
                    "value": 0.0138,
                    "error": 0.006766637656306793
                },
                {
                    "value": 0.0129,
                    "error": 0.005639148871948674
                },
                {
                    "value": 0.0114,
                    "error": 0.005200961449578338
                },
                {
                    "value": 1.34,
                    "error": 0.6128621378417825
                }
            ]
        },
        {
            "name": "psi_br_correlated",
            "latex": null,
            "category": "",
            "average": -0.0004508092428069759,
            "error": 0.9999966802639924,
            "measurements": [
                {
                    "value": 0.0101,
                    "error": 0.0012609520212918492
                },
                {
                    "value": 0.0079,
                    "error": 0.0016155494421403514
                }
            ]
        },
        {
            "name": "jpsi_br_correlated",
            "latex": null,
            "category": "",
            "average": 0.007209048439165512,
            "error": 0.9999919713022022,
            "measurements": [
                {
                    "value": 0.0128,
                    "error": 0.002539685019840059
                },
                {
                    "value": 0.0129,
                    "error": 0.0023237900077244505
                },
                {
                    "value": 0.01061,
                    "error": 0.0008173738434767778
                },
                {
                    "value": 0.014539999999999999,
                    "error": 0.0017310979175078458
                },
                {
                    "value": 0.00869,
                    "error": 0.0005442425929675112
                },
                {
                    "value": 0.013090000000000001,
                    "error": 0.0013443213901444845
                }
            ]
        },
        {
            "name": "k1270_br_correlated",
            "latex": null,
            "category": "",
            "average": 0.0,
            "error": 1.000006676431928,
            "measurements": [
                {
                    "value": 0.018000000000000002,
                    "error": 0.007145628033979938
                },
                {
                    "value": 0.013000000000000001,
                    "error": 0.0060654760736483
                }
            ]
        },
        {
            "name": "frag",
            "latex": null,
            "category": "",
            "average": -0.0006147869478547925,
            "error": 0.9999999857798505,
            "measurements": [
                {
                    "value": 0.00035,
                    "error": 0.00012288205727444508
                }
            ]
        },
        {
            "name": "BR",
            "latex": null,
            "category": "",
            "average": 0.0,
            "error": 1.000001547633051,
            "measurements": [
                {
                    "value": 1.13,
                    "error": 0.3416138170507744
                },
                {
                    "value": 4e-05,
                    "error": 1.148912529307606e-05
                }
            ]
        },
        {
            "name": "PR",
            "latex": null,
            "category": "",
            "average": 0.0,
            "error": 0.9999953467107388,
            "measurements": [
                {
                    "value": 1.13,
                    "error": 0.41303752856126763
                }
            ]
        },
        {
            "name": "br",
            "latex": null,
            "category": "",
            "average": -0.003267621492708142,
            "error": 1.000007702293415,
            "measurements": [
                {
                    "value": 3.3,
                    "error": 1.7291616465790582
                },
                {
                    "value": 0.0121,
                    "error": 0.010129441258315126
                },
                {
                    "value": 0.0064,
                    "error": 0.004536282279542286
                },
                {
                    "value": 0.008,
                    "error": 0.005794722493140868
                }
            ]
        },
        {
            "name": "psi_eta_br_correlated",
            "latex": null,
            "category": "",
            "average": -1.0325197622653273e-05,
            "error": 1.0000537851124265,
            "measurements": [
                {
                    "value": 0.00108,
                    "error": 0.0004769696007084728
                }
            ]
        },
        {
            "name": "psi_eta_k_br_correlated",
            "latex": null,
            "category": "",
            "average": 2.118878297618633e-06,
            "error": 1.0000034088050131,
            "measurements": [
                {
                    "value": 0.00084,
                    "error": 0.0005358171329847526
                }
            ]
        },
        {
            "name": "jpsi_phi_k_br_correlated",
            "latex": null,
            "category": "",
            "average": 0.0,
            "error": 0.9999999999962895,
            "measurements": [
                {
                    "value": 0.00102,
                    "error": 0.000418568990729127
                }
            ]
        },
        {
            "name": "jpsi_phi_br_correlated",
            "latex": null,
            "category": "",
            "average": 0.0,
            "error": 1.000001202121201,
            "measurements": [
                {
                    "value": 0.00044000000000000007,
                    "error": 0.00016522711641858305
                }
            ]
        },
        {
            "name": "psi2S_br_correlated",
            "latex": null,
            "category": "",
            "average": 0.001296756172594461,
            "error": 0.9999899394252609,
            "measurements": [
                {
                    "value": 0.00617,
                    "error": 0.0008008745220070371
                },
                {
                    "value": 0.00592,
                    "error": 0.001743014629886967
                },
                {
                    "value": 0.0064600000000000005,
                    "error": 0.001062214667569602
                },
                {
                    "value": 0.00649,
                    "error": 0.0017674557985986525
                }
            ]
        },
        {
            "name": "chic1_br_correlated",
            "latex": null,
            "category": "",
            "average": 0.006039272350900607,
            "error": 0.9999912849939698,
            "measurements": [
                {
                    "value": 0.00294,
                    "error": 0.0019207810911189228
                },
                {
                    "value": 0.00453,
                    "error": 0.0008459314393022641
                },
                {
                    "value": 0.00327,
                    "error": 0.0011324310133513653
                }
            ]
        },
        {
            "name": "tau_Bc",
            "latex": null,
            "category": "",
            "average": -0.13385892933982643,
            "error": 0.9937778345484116,
            "measurements": [
                {
                    "value": 0.048,
                    "error": 0.011090536506409418
                },
                {
                    "value": 2.55,
                    "error": 0.9848350115628507
                }
            ]
        },
        {
            "name": "fragmentation",
            "latex": null,
            "category": "",
            "average": 0.5487199511766253,
            "error": 0.7766267370141966,
            "measurements": [
                {
                    "value": 0.65,
                    "error": 0.11874342087037917
                },
                {
                    "value": 0.55,
                    "error": 0.18439088914585774
                }
            ]
        }
    ];
    var dttable = $('#example').DataTable({
        data: jsonData,
        stateSave: true,
        drawCallback: function () {
            $('.paginate_button', this.api().table().container())
                .on('click', function () {
                    location.reload();
                });
        },

        columns: [
            { data: 'latex' },
            { data: 'category' },
            { data: 'average' },
            { data: 'error' },
            { data: 'name' },


        ],


        initComplete: function () {
            this.api().columns([1]).every(function () {
                var column = this;
                var select = $('<select><option value=""></option></select>')
                    .appendTo($(column.footer()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                        location.reload();
                    });

                column
                    .data()
                    .unique()
                    .sort()
                    .each(function (d, j) {
                        var val = $.fn.dataTable.util.escapeRegex(d);
                        if (column.search() === "^" + val + "$") {
                            select.append(
                                '<option value="' + d + '" selected="selected">' + dict[d] + "</option>"
                            );
                        } else {
                            select.append('<option value="' + d + '">' + dict[d] + "</option>");
                        }
                    });
            });



        }
    });

    $('#example tbody').on('click', 'tr', function () {
        var name = $('td', this).eq(4).text();
        var measurements = null;
        var avg = null;
        var error = null;
        var category = null;
        var latex = null;
        $('#DescModal').modal("show");
        $('.modal-title').text(name);
        $.each(jsonData, function (i, v) {
            if (v.name == name) {
                measurements = v.measurements;
                avg = v.average;
                error = v.error;
                category = dict[v.category];

            }
        });
        var st = null;

        $.each(measurements, function (i, v) {
            var st2 = v.value + '$' + v.error;
            st = st + "<tr><td>" + i + "</td><td>" + v.value + "</td><td>" + v.error + '</td><td> <input type="checkbox" name="inlineRadioOptions" class="inlineRadio" value="' + st2 + '" ></td></tr>';

        });
        $(".mes tbody").html(st);
        $(".average span").text(avg);
        $(".category span").text(category);
        $(".error span").text(error);

    });


    $('#sub').on('click', function (e) {
        e.preventDefault();
        var avg = 0.0;
        var err = 0.0;
        var arr1 = [];
        var l = $('.inlineRadio:checkbox:checked').length;
        $('.inlineRadio:checkbox:checked').each(function (i, v) {
            var arr2 = [];
            var ind = parseInt(v.value.indexOf('$'));
            avg = avg + parseFloat(v.value.slice(0, ind));
            err = err + parseFloat(v.value.slice(ind + 1,)) ** 2;
            arr2.push(String(i), parseFloat(v.value.slice(0, ind)));
            arr1.push(arr2);
        });
        avg = avg / l;
        err = err ** 0.5;
        $(".mes").hide();
        $("#chart_div").show();
        $(".caverage span").text(avg);
        $(".cerror span").text(err);
        $('#back').show();

        var data = google.visualization.arrayToDataTable([
            ['ExperimentNo', 'Value'],
            ['Average', avg],

        ]);

        $(arr1).each(function (i, v) {
            data.addRow(v);
        });

        var options = {
            chart: {
                title: 'Diferent Experiments with their average and Values'
            },
            chartArea: { width: '65%' },
            hAxis: {
                title: 'Value',
                minValue: 0,
            },
            vAxis: {
                title: 'Experiment Number'
            },
            bars: 'horizontal'
        };

        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

        if (navigator.userAgent.match(/Trident\/7\./)) {
            google.visualization.events.addListener(chart, 'click', function () {
                chart_div.innerHTML = '<img src="' + chart.getImageURI() + '">';
                console.log(chart_div.innerHTML);
            });
            chart.draw(data, options);
        } else {
            google.visualization.events.addListener(chart, 'select png', function () {
                chart_div.innerHTML = '<img src="' + chart.getImageURI() + '">';
                console.log(chart_div.innerHTML);
            });
            chart.draw(data, options);

        }

        $('#sub').hide();
    });

    $('#back').on('click', function (e) {
        e.preventDefault();
        $('#sub').show();
        $('#back').hide();
        $("#chart_div").hide();
        $(".mes").show();
        $(".caverage span").text('');
        $(".cerror span").text('');
    });
});
