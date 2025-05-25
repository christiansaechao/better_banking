export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      accounts: {
        Row: {
          AccountID: string
          AccountNumber: string | null
          AccountType: string | null
          Balance: number | null
          CustomerID: number | null
          InterestRate: number | null
          OpenedDate: string | null
          OverdraftProtection: boolean | null
          Status: string | null
        }
        Insert: {
          AccountID: string
          AccountNumber?: string | null
          AccountType?: string | null
          Balance?: number | null
          CustomerID?: number | null
          InterestRate?: number | null
          OpenedDate?: string | null
          OverdraftProtection?: boolean | null
          Status?: string | null
        }
        Update: {
          AccountID?: string
          AccountNumber?: string | null
          AccountType?: string | null
          Balance?: number | null
          CustomerID?: number | null
          InterestRate?: number | null
          OpenedDate?: string | null
          OverdraftProtection?: boolean | null
          Status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Accounts_CustomerID_fkey"
            columns: ["CustomerID"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["CustomerID"]
          },
        ]
      }
      cards: {
        Row: {
          CardID: string
          CardNumber: number | null
          CardStatus: string | null
          CardType: string | null
          CurrentSpending: number | null
          CustomerID: number | null
          DailyLimit: number | null
          ExpiryDate: string | null
          LinkedAccountID: string | null
        }
        Insert: {
          CardID: string
          CardNumber?: number | null
          CardStatus?: string | null
          CardType?: string | null
          CurrentSpending?: number | null
          CustomerID?: number | null
          DailyLimit?: number | null
          ExpiryDate?: string | null
          LinkedAccountID?: string | null
        }
        Update: {
          CardID?: string
          CardNumber?: number | null
          CardStatus?: string | null
          CardType?: string | null
          CurrentSpending?: number | null
          CustomerID?: number | null
          DailyLimit?: number | null
          ExpiryDate?: string | null
          LinkedAccountID?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Cards_CustomerID_fkey"
            columns: ["CustomerID"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["CustomerID"]
          },
          {
            foreignKeyName: "Cards_LinkedAccountID_fkey"
            columns: ["LinkedAccountID"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["AccountID"]
          },
        ]
      }
      documents: {
        Row: {
          CustomerID: number | null
          DocumentID: string
          FileLink: string | null
          Status: string | null
          Type: string | null
          UploadedDate: string | null
        }
        Insert: {
          CustomerID?: number | null
          DocumentID: string
          FileLink?: string | null
          Status?: string | null
          Type?: string | null
          UploadedDate?: string | null
        }
        Update: {
          CustomerID?: number | null
          DocumentID?: string
          FileLink?: string | null
          Status?: string | null
          Type?: string | null
          UploadedDate?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Documents_CustomerID_fkey"
            columns: ["CustomerID"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["CustomerID"]
          },
        ]
      }
      employee_cash_breakdown: {
        Row: {
          bill_type: number | null
          cash_id: string
          drawer_id: string | null
          quantity: number | null
        }
        Insert: {
          bill_type?: number | null
          cash_id: string
          drawer_id?: string | null
          quantity?: number | null
        }
        Update: {
          bill_type?: number | null
          cash_id?: string
          drawer_id?: string | null
          quantity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Employee_Cash_Breakdown_drawer_id_fkey"
            columns: ["drawer_id"]
            isOneToOne: false
            referencedRelation: "employee_drawers"
            referencedColumns: ["drawer_id"]
          },
        ]
      }
      employee_coin_breakdown: {
        Row: {
          coin_id: string
          coin_type: number | null
          drawer_id: string | null
          quantity: number | null
        }
        Insert: {
          coin_id: string
          coin_type?: number | null
          drawer_id?: string | null
          quantity?: number | null
        }
        Update: {
          coin_id?: string
          coin_type?: number | null
          drawer_id?: string | null
          quantity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Employee_Coin_Breakdown_drawer_id_fkey"
            columns: ["drawer_id"]
            isOneToOne: false
            referencedRelation: "employee_drawers"
            referencedColumns: ["drawer_id"]
          },
        ]
      }
      employee_drawers: {
        Row: {
          drawer_id: string
          employee_id: string | null
          last_balanced: string | null
          new_employee_id: number | null
          time_clocked_in: string | null
          total_drawer_value: number | null
        }
        Insert: {
          drawer_id: string
          employee_id?: string | null
          last_balanced?: string | null
          new_employee_id?: number | null
          time_clocked_in?: string | null
          total_drawer_value?: number | null
        }
        Update: {
          drawer_id?: string
          employee_id?: string | null
          last_balanced?: string | null
          new_employee_id?: number | null
          time_clocked_in?: string | null
          total_drawer_value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "employee_drawers_new_employee_id_fkey"
            columns: ["new_employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      employee_transactions: {
        Row: {
          amount: number | null
          new_employee_id: number | null
          timestamp: string | null
          transaction_id: string
          type: string | null
        }
        Insert: {
          amount?: number | null
          new_employee_id?: number | null
          timestamp?: string | null
          transaction_id: string
          type?: string | null
        }
        Update: {
          amount?: number | null
          new_employee_id?: number | null
          timestamp?: string | null
          transaction_id?: string
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employee_transactions_new_employee_id_fkey"
            columns: ["new_employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      employees: {
        Row: {
          age: number | null
          auth_user_id: string | null
          branch_location: string | null
          employee_id: string
          id: number
          name: string | null
          occupation: string | null
          password: string | null
          status: string | null
        }
        Insert: {
          age?: number | null
          auth_user_id?: string | null
          branch_location?: string | null
          employee_id: string
          id?: number
          name?: string | null
          occupation?: string | null
          password?: string | null
          status?: string | null
        }
        Update: {
          age?: number | null
          auth_user_id?: string | null
          branch_location?: string | null
          employee_id?: string
          id?: number
          name?: string | null
          occupation?: string | null
          password?: string | null
          status?: string | null
        }
        Relationships: []
      }
      statements: {
        Row: {
          AccountID: string | null
          ClosingBalance: number | null
          DownloadLink: string | null
          GeneratedDate: string | null
          OpeningBalance: number | null
          PeriodEnd: string | null
          PeriodStart: string | null
          StatementID: string
          TotalCredits: number | null
          TotalDebits: number | null
        }
        Insert: {
          AccountID?: string | null
          ClosingBalance?: number | null
          DownloadLink?: string | null
          GeneratedDate?: string | null
          OpeningBalance?: number | null
          PeriodEnd?: string | null
          PeriodStart?: string | null
          StatementID: string
          TotalCredits?: number | null
          TotalDebits?: number | null
        }
        Update: {
          AccountID?: string | null
          ClosingBalance?: number | null
          DownloadLink?: string | null
          GeneratedDate?: string | null
          OpeningBalance?: number | null
          PeriodEnd?: string | null
          PeriodStart?: string | null
          StatementID?: string
          TotalCredits?: number | null
          TotalDebits?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Statements_AccountID_fkey"
            columns: ["AccountID"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["AccountID"]
          },
        ]
      }
      transactions: {
        Row: {
          AccountID: string | null
          Amount: number | null
          Date: string | null
          Description: string | null
          Status: string | null
          TransactionID: string
          TransactionMethod: string | null
          Type: string | null
        }
        Insert: {
          AccountID?: string | null
          Amount?: number | null
          Date?: string | null
          Description?: string | null
          Status?: string | null
          TransactionID: string
          TransactionMethod?: string | null
          Type?: string | null
        }
        Update: {
          AccountID?: string | null
          Amount?: number | null
          Date?: string | null
          Description?: string | null
          Status?: string | null
          TransactionID?: string
          TransactionMethod?: string | null
          Type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Transactions_AccountID_fkey"
            columns: ["AccountID"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["AccountID"]
          },
        ]
      }
      users: {
        Row: {
          Address: string | null
          CustomerID: number
          DateOfBirth: string | null
          Email: string | null
          KYCStatus: string | null
          Name: string | null
          Occupation: string | null
          Phone: string | null
          SignupDate: string | null
          SSN: string | null
          Status: string | null
        }
        Insert: {
          Address?: string | null
          CustomerID: number
          DateOfBirth?: string | null
          Email?: string | null
          KYCStatus?: string | null
          Name?: string | null
          Occupation?: string | null
          Phone?: string | null
          SignupDate?: string | null
          SSN?: string | null
          Status?: string | null
        }
        Update: {
          Address?: string | null
          CustomerID?: number
          DateOfBirth?: string | null
          Email?: string | null
          KYCStatus?: string | null
          Name?: string | null
          Occupation?: string | null
          Phone?: string | null
          SignupDate?: string | null
          SSN?: string | null
          Status?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const
