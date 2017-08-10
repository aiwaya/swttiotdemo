public class IotController {

    @AuraEnabled
    public static String createCase(String accountId, String serialNumber) {
        List<Account> as1 = [Select Id from Account where id=:accountId];
        if (as1.isEmpty()) {
            List<Account> as2 = [Select Id from Account where Name = 'IoT Company'];
            if (as2.isEmpty()) {
                Account a = new Account(Name = 'IoT Company');
                insert a;
                accountId = a.Id;
            } else {
                accountId = as2.get(0).Id;
            }
        }
        Case c = new Case(Subject = '機器に異常を検知しました', AccountId = accountId, SerialNumber__c  = serialNumber);
        insert c;
        return c.Id;
    }
}