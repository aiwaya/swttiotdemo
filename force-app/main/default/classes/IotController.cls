public class IotController {

    @AuraEnabled
    public static String createCase(String accountId, String serialNumber) {
        Case c = new Case(Subject = '機器に異常を検知しました', AccountId = accountId, SerialNumber__c  = serialNumber);
        insert c;
        return c.Id;
    }
}