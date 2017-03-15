var text = `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE section PUBLIC "-//OASIS//DTD DocBook XML V4.5//EN"
"http://www.oasis-open.org/docbook/xml/4.5/docbookx.dtd">
<section>
  <title>Introduction à microsoft Azure</title>

  <para>Le cloud est un ensemble de services mis à la disposition du client
  par un fournisseur à travers internet. Comme il est à la mode, il y a
  plusieurs fournisseurs tels que Microsoft. Ce dernier a mis en place le
  service <emphasis role="bold">Azure</emphasis> dédié au cloud computing. On
  va le présenter le long de cet article.</para>

  <section>
    <title>Pourquoi Choisir le cloud computing</title>

    <para>Le cloud permet de ne pas soucier de l'infrastructure. On peut
    commencer avec petites machines et augmenter de machines ou de ressources
    en fonction des besoins. on dit qu'il est scalable et dynamique. Il permet
    de réduire les besoins en ressources IT et les dèpenses opérationnelles.
    La partie la plus importante c'est on peut se servir soi-même ; ajouter ou
    diminuer des machines virtuelles ou des ressurces (disque dur , ram
    ...)</para>
  </section>

  <section>
    <title>Modèles ou offres du cloud</title>

    <para>Les services du cloud se déclinent sous trois formes : </para>

    <itemizedlist>
      <listitem>
        <para><emphasis role="bold">Software as a service (Saas)</emphasis> :
        L'entreprise ou l'utisateur ne s'occupe de rien, il ne fait que
        consommer par example onedrive, dropbox ...</para>
      </listitem>

      <listitem>
        <para><emphasis role="bold">Platform as a service (Paas)</emphasis> :
        le client s’occupe de la partie Application et données , le reste est
        au fournisseur (runtime, middleware, O/S, virtualisation, Servers,
        Storage, Networking</para>
      </listitem>

      <listitem>
        <para><emphasis role="bold">Infrastructure as a service</emphasis> :
        le client s’occupe une bonne partie du travail, c’est à lui
        d’installer le système d’exploitation. Quant au fournisseur il ne gère
        que la virtualisation, les serveurs, le stockage et le réseau</para>
      </listitem>
    </itemizedlist>
  </section>

  <section>
    <title>Modèles de déploiement ou types de Cloud </title>

    <para>Le cloud se déploie sous 3 formes. De ce fait le client peut chosir
    selon ses attentes. Les types sont : </para>

    <itemizedlist>
      <listitem>
        <para><emphasis role="bold">Public Cloud</emphasis> (utilisé par
        plusieurs organisations) géré et contrôlé par une partie tierce</para>
      </listitem>

      <listitem>
        <para> <emphasis role="bold">Private Cloud</emphasis> (dédié à une
        seule entreprise) géré et contrôlé par l’entreprise </para>
      </listitem>

      <listitem>
        <para><emphasis role="bold">Hybrid cloud </emphasis>(mélange des deux
        (private et public) cloud) permet de choisir l’emplacement le plus
        approprié pour chaque service permet de profiter des avantages du
        cloud public quand c’est nécessaire </para>
      </listitem>
    </itemizedlist>
  </section>

  <section>
    <title>Microsoft azure</title>

    <para>Azure est l'un des plus grands fournisseurs de cloud. il est
    sécurisé avec les normes trust and control. Il existe sur diffèrentes
    régions. C'est à dire on peut nos services selon la position géographique
    qui nous arrange vraiment. On peut connaitre toutes les régions azure en
    suivant ce lien azure.microsoft.com/regions</para>

    <para/>

    <section>
      <title>Comment choisir une région Azure</title>

      <itemizedlist>
        <listitem>
          <para><emphasis role="bold">Législation : </emphasis>il y a certains
          pays qui ne permettent pas que les informations relatives à leurs
          citoyens sortent de leur territoire; du coup on ne peut utiliser
          certaines régions </para>
        </listitem>

        <listitem>
          <para><emphasis role="bold">Redondance </emphasis></para>
        </listitem>

        <listitem>
          <para><emphasis role="bold">Proximité</emphasis> on peut se baser
          sur (azurespeed.com) </para>
        </listitem>
      </itemizedlist>
    </section>

    <section>
      <title>Comment peut -on facturer l’usage </title>

      <para>Les services azure sont facturés de diffèrentes manières pour
      ainsi une adhèration facile. Ainsi Azure se paie par : </para>

      <itemizedlist>
        <listitem>
          <para><emphasis role="bold">Heure d'utilisation</emphasis> </para>
        </listitem>

        <listitem>
          <para><emphasis role="bold">Transfert de données
          (GB)</emphasis></para>
        </listitem>

        <listitem>
          <para><emphasis role="bold">Stockage (GB/mois) </emphasis></para>
        </listitem>

        <listitem>
          <para><emphasis role="bold">Transactions sur le stockage (par
          10000)</emphasis></para>
        </listitem>

        <listitem>
          <para><emphasis role="bold">Instances de machines virtuelles
          </emphasis></para>
        </listitem>

        <listitem>
          <para><emphasis role="bold">Utilisateur</emphasis></para>
        </listitem>
      </itemizedlist>
    </section>

    <section>
      <title>Comment payer sur Azure</title>

      <itemizedlist>
        <listitem>
          <para> <emphasis role="bold">Pay as you go</emphasis> (carte crédit
          fournie à la création, débité en fonction de l’utilisation)</para>
        </listitem>

        <listitem>
          <para> <emphasis role="bold">M</emphasis><emphasis
          role="bold">icrosoft Open License</emphasis> (acheter une clé de
          produit chez un revendeur , incrémenter de 100$) </para>
        </listitem>

        <listitem>
          <para> <emphasis role="bold">Accord Entreprise </emphasis></para>
        </listitem>

        <listitem>
          <para> <emphasis role="bold">MSDN subscription</emphasis>/ partner
          benefit (recevoir crédit pour le test et le développement)</para>
        </listitem>
      </itemizedlist>
    </section>

    <section>
      <title>Comment savoir combien Azure me coûtera </title>

      <para>On peut faire une simulation pour savoir combien azure va nous
      coûter avant d'y adhèrer. On peut utiliser les outils suivants ; </para>

      <itemizedlist>
        <listitem>
          <para> <emphasis role="bold">Pricing calculator</emphasis> (se
          basant sur le online calculator)
          azure.microsoft.com/pricing/calculator</para>
        </listitem>

        <listitem>
          <para><emphasis role="bold">Testing</emphasis></para>
        </listitem>
      </itemizedlist>
    </section>

    <section>
      <title> Comment contrôler les dépenses</title>

      <para>Il faut prendre en conditions certains aspect pour réduire les
      coûts comme : </para>

      <itemizedlist>
        <listitem>
          <para><emphasis role="bold">Taille et redondance</emphasis> :
          choisir les tailles de machine virtuelle et les levels de stockage
          prudemment</para>
        </listitem>

        <listitem>
          <para><emphasis role="bold">Région</emphasis> : si les services sont
          localisés dans des régions différentes, des coûts additionnels de
          transfert de données seront contractées</para>
        </listitem>

        <listitem>
          <para> <emphasis role="bold">Eteindre ou allumer les machines
          virtuelles</emphasis> : éteindre les machines virtuelles quand elles
          ne sont pas utilisées</para>
        </listitem>

        <listitem>
          <para><emphasis role="bold">Choix de service</emphasis> : Choisir
          seulement les services dont on a vraiment besoin</para>
        </listitem>
      </itemizedlist>
    </section>

    <section>
      <title>service Level Agreement </title>

      <para>Un service Level Agreement (SLA) est un niveau de service fourni
      par microsoft pour garantir les les services azure. En cas de non
      respect du niveau de service promis , un crédit vous sera fourni. Chaque
      service a differents SLA Pour en savoir plus
      (azure.microsoft.com/support/legal/sla) </para>
    </section>

    <section>
      <title>Comptes Azure </title>

      <para>Les comptes azure contiennent un ou plusieurs abonnements. Ainsi
      chaque compte Azure est lié à un identifiant unique qui est une
      combinaison d’adresse email et de mot de passe. Ils peuvent être des
      comptes Microsoft ou organisation. Lors d’un nouvel abonnement le compte
      administrator est attribué directement à l’identifiant de
      l'utilisteur</para>
    </section>

    <section>
      <title>Abonnements </title>

      <para>Les abonnements contiennent un certain nombre de service et chaque
      abonnement est facturé séparément et peut avoir différentes license et
      méthode de paiement.</para>

      <para/>
    </section>

    <section>
      <title>Administration d'Azure </title>

      <para>Azure peut être administré de deux manières soit par navigateur
      web ou soit par Powershell Legacy Portal qui est l’ancien portail web
      longtemps utilisé Nouveau Portail qui est développé récemment et toutes
      les fonctionnalités ne sont pas disponibles néanmoins les nouvelles
      fonctionnalités existent seulementent la-bas</para>

      <para/>
    </section>

    <section>
      <title>Exploration du portail web </title>

      <para>Le portail est simple et intuitif . On voit tous ce qu'on a besoin
      à premier aperçu.</para>

      <para/>

      <section>
        <title>Ancien portail </title>

        <mediaobject>
          <imageobject>
            <imagedata fileref="???"/>
          </imageobject>
        </mediaobject>

        <para/>
      </section>

      <section>
        <title>Nouveau portail </title>

        <mediaobject>
          <imageobject>
            <imagedata fileref="???"/>
          </imageobject>
        </mediaobject>

        <para/>
      </section>

      <section>
        <title>Startboard</title>
        <para>C’est un tableau de bord customisé qui permet d’avoir certaines
        informations à un coup d’oeil</para>

        <para/>

        <mediaobject>
          <imageobject>
            <imagedata fileref="???"/>
          </imageobject>
        </mediaobject>
      </section>
      <section>
        <title>Service Health </title>
        <para>il permet de voir le status par service et par région </para>
        <para/>
        <mediaobject>
          <imageobject>
            <imagedata fileref="???"/>
          </imageobject>
        </mediaobject>
      </section>
      <section>
        <title>Notifications</title>
        <para>ils montrent les opèrations en cours ou terminées en envoyant
        des alertes</para>
        <para/>
        <mediaobject>
          <imageobject>
            <imagedata fileref="???"/>
          </imageobject>
        </mediaobject>
      </section>
      <section>
        <title>Browse</title>
        <para>Il fournit un centre d’accés pour le provisionnement des
        ressources </para>
        <para/>
        <mediaobject>
          <imageobject>
            <imagedata fileref="???"/>
          </imageobject>
        </mediaobject>
      </section>
      <section>
        <title>Billing</title>
        <para>Un aperçu des dépenses par abonnement avec des détails</para>
        <para/>
        <mediaobject>
          <imageobject>
            <imagedata fileref="???"/>
          </imageobject>
        </mediaobject>
      </section>
      <section>
        <title>New </title>
        <para>Il permet de parcourir et ajouter des services à un abonnement
        </para>
        <para/>
        <mediaobject>
          <imageobject>
            <imagedata fileref="???"/>
          </imageobject>
        </mediaobject>
      </section>
    </section>
  </section>
  <section>
    <title/>
    <para/>
  </section>
  <section>
    <title/>
    <para/>
  </section>
</section>

`

console.log(text.length);